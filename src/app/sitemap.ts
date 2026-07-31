import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { LOCALES } from '@/i18n/config';
import { localizedPosts } from '@/data/localizedPosts';

// 영어는 위 STATIC_PATHS 에서 이미 다루므로 제외한다.
const NEW_LOCALES = LOCALES.filter((l) => l !== 'en');

// 한국어(루트)와 영어(/en)가 같은 구조로 존재한다.
// 이전 sitemap 은 루트와 /blog, 그리고 한국어 블로그 상세만 담고 있어서
// 영어 페이지 전체와 가이드/FAQ/스토리 페이지가 색인 대상에서 빠져 있었다.
const STATIC_PATHS = [
  '',
  '/blog',
  '/faq',
  '/guide',
  '/stories',
  '/penpal-app',
  '/guide/getting-started',
  '/guide/writing-tips',
  '/guide/building-friendship',
  '/guide/cultural-exchange',
  '/guide/language-learning',
  '/guide/safety-privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lettie-dating.com';
  const today = new Date().toISOString().split('T')[0];
  const posts = Object.values(blogPosts);

  const priorityOf = (path: string) => {
    if (path === '') return 1;
    if (path.split('/').length > 2) return 0.6; // 가이드 상세
    return 0.8;
  };

  const staticRoutes = STATIC_PATHS.flatMap((path) =>
    ['', '/en'].map((prefix) => ({
      url: `${baseUrl}${prefix}${path}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: priorityOf(path),
    })),
  );

  const blogRoutes = posts.flatMap((post) =>
    ['', '/en'].map((prefix) => ({
      url: `${baseUrl}${prefix}/blog/${post.id}`,
      lastModified: post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  // 새로 추가한 언어는 아직 메인 페이지만 있다.
  // 없는 하위 경로까지 넣으면 404 를 제출하는 셈이라 메인만 담는다.
  const localeHomes = NEW_LOCALES.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 신규 언어로 번역된 글. 실제로 번역이 있는 조합만 넣는다.
  const localizedRoutes = Object.entries(localizedPosts).flatMap(([slug, entry]) =>
    Object.keys(entry.translations)
      .filter((l) => l !== 'en')
      .map((locale) => ({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: entry.date,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
  );

  return [...staticRoutes, ...localeHomes, ...blogRoutes, ...localizedRoutes];
}

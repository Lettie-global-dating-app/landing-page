import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lettie-dating.com'

  // 페이지별로 다른 lastModified 날짜 설정 (더 정확한 SEO)
  const mainPageDate = new Date('2025-10-27') // 메인 페이지 최근 수정일
  const contentDate = new Date('2025-10-27') // 콘텐츠 페이지 최근 수정일
  const legalDate = new Date('2025-06-20') // 법적 문서 최근 수정일

  // Blog post IDs
  const blogPosts = [
    'how-to-start-penpal',
    'penpal-culture-guide',
    'language-exchange-tips',
    'marcus-introduction',
    'dearest-friend'
  ]

  // Guide categories
  const guideCategories = [
    'getting-started',
    'writing-tips',
    'cultural-exchange',
    'language-learning',
    'building-friendship',
    'safety-privacy'
  ]

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: mainPageDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: mainPageDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // SEO Content Pages (Korean)
    {
      url: `${baseUrl}/blog`,
      lastModified: contentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stories`,
      lastModified: contentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/penpal-app`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // SEO Content Pages (English)
    {
      url: `${baseUrl}/en/blog`,
      lastModified: contentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/faq`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/stories`,
      lastModified: contentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/guide`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/penpal-app`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog Posts (Korean)
    ...blogPosts.map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: contentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Blog Posts (English)
    ...blogPosts.map(slug => ({
      url: `${baseUrl}/en/blog/${slug}`,
      lastModified: contentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Guide Pages (Korean)
    ...guideCategories.map(category => ({
      url: `${baseUrl}/guide/${category}`,
      lastModified: contentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Guide Pages (English)
    ...guideCategories.map(category => ({
      url: `${baseUrl}/en/guide/${category}`,
      lastModified: contentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Legal Pages
    {
      url: `${baseUrl}/privacy`,
      lastModified: legalDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: legalDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified: legalDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/en/terms`,
      lastModified: legalDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}

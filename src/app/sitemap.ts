import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lettie.app'
  const lastModified = new Date()

  // Blog post IDs
  const blogPosts = [
    'how-to-start-penpal',
    'penpal-culture-guide',
    'language-exchange-tips'
  ]

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // SEO Content Pages
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stories`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/penpal-app`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog Posts
    ...blogPosts.map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Legal Pages
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/en/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
} 
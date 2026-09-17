import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://pavel-skudarnov.ru'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/en',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
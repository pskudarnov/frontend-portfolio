import { MetadataRoute } from 'next'

const siteUrl = 'https://pavel-skudarnov.ru'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
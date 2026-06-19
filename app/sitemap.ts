import { MetadataRoute } from 'next';
import { blogPosts } from './blog/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://homebase-website.vercel.app';
  const lastModified = new Date().toISOString();

  // Static pages
  const staticRoutes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog post pages
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

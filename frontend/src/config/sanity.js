import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'xotxp0yd',
  dataset: 'production',
  apiVersion: '2025-01-01',
  token: 'skYrdcoyVZiLwSz53tD1VQhzkC07HPFzBI3sSBJ1bLmlfAsPpvdIGoZB3z1HcpRHjb4eXNWMy8N3WL9EdKggxt38Y54kztgAOHnj0IcYdgBABbJlL8dkUUAcWoDS81TMZ5OHjmvGytrM7Gek0xfnysLxRo2wnPj5G3COZDzLtBjmPfGsQcfe',
  useCdn: true
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

// Blog post queries
export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url,
  "author": author->name
}`;

export const singlePostQuery = (slug) => `*[_type == "post" && slug.current == "${slug}"][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  body,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url,
  "author": author->{
    name,
    "image": image.asset->url,
    bio
  }
}`;
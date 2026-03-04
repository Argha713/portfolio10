import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { sanityClient, blogPostsQuery } from '../config/sanity';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import SocialShare from '../components/SocialShare';
import ReadingProgress from '../components/ReadingProgress';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const data = await sanityClient.fetch(blogPostsQuery);
      setPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      // Fallback to mock data if Sanity fails
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...new Set(posts.flatMap(p => p.categories || []))];
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(p => p.categories && p.categories.includes(selectedCategory));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ReadingProgress />
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      
      {/* Hero Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Insights on AI development, .NET architecture, RAG systems, and enterprise software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {posts.length > 0 ? (
          <>
            {/* Category Filter */}
            {categories.length > 1 && (
              <Tabs defaultValue="all" className="mb-12">
                <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-auto gap-2">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setSelectedCategory(category)}
                      className="capitalize"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post._id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col hover:border-primary/50">
                  {/* Post Image */}
                  {post.mainImage && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.mainImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.categories && post.categories.length > 0 && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-white">{post.categories[0]}</Badge>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Post Content */}
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Tags */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.categories.slice(0, 3).map((cat, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      {post.readTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      )}
                    </div>

                    {/* Read More Button */}
                    <Button 
                      variant="ghost" 
                      className="w-full group/btn hover:bg-primary/10 hover:text-primary" 
                      asChild
                    >
                      <a href={`#${post.slug.current || post._id}`}>
                        Read Article
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No blog posts found in this category.
                </p>
              </div>
            )}
          </>
        ) : (
          /* No Posts from Sanity Yet */
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              I'm currently setting up my blog. Check back soon for articles on AI, .NET, RAG systems, and enterprise development.
            </p>
            <p className="text-sm text-muted-foreground">
              In the meantime, check out my projects and GitHub repositories to see what I'm working on.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get notified when I publish new articles about AI, .NET, and software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;

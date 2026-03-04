import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(blogPosts.map(p => p.category))];
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Insights on AI development, .NET architecture, and freelancing. Practical guides, lessons learned, and technical deep-dives.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Category Filter */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4 gap-2">
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-cyan-500 text-white">{post.category}</Badge>
                </div>
              </div>

              {/* Post Content */}
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl mb-2 line-clamp-2 group-hover:text-cyan-500 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Button 
                  variant="ghost" 
                  className="w-full group/btn hover:bg-cyan-500/10 hover:text-cyan-500" 
                  asChild
                >
                  <a href={`#${post.slug}`}>
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
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No blog posts found in this category.
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
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Get notified when I publish new articles about AI, .NET, and software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
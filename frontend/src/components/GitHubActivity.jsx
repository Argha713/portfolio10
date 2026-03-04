import React, { useEffect, useState } from 'react';
import { GitBranch, Star, GitFork, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const GitHubActivity = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = 'Argha713';

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
      );
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  if (loading) {
    return (
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading GitHub activity...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <GitBranch className="w-8 h-8 text-primary" />
            GitHub Activity
          </h2>
          <p className="text-lg text-muted-foreground">
            My latest open-source contributions and projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <Card
              key={repo.id}
              className="hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-start justify-between">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {repo.name}
                  </a>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {repo.description || 'No description available'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Language */}
                {repo.language && (
                  <Badge variant="secondary" className="text-xs">
                    {repo.language}
                  </Badge>
                )}

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>

                {/* Last Updated */}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all repositories on GitHub
            <GitBranch className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
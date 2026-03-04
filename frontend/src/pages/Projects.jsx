import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');

  // Get all categories
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  
  // Get all unique technologies
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];
  const technologies = ['all', ...allTechnologies];

  // Filter projects by category and technology
  let filteredProjects = projects;
  
  if (selectedCategory !== 'all') {
    filteredProjects = filteredProjects.filter(p => p.category === selectedCategory);
  }
  
  if (selectedTech !== 'all') {
    filteredProjects = filteredProjects.filter(p => p.technologies.includes(selectedTech));
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Showcase</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              A collection of AI and .NET projects demonstrating real-world solutions with measurable business impact. Each project follows a Problem → Solution → Impact framework.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter by Category
          </h3>
          <Tabs defaultValue="all" className="mb-6">
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
        </div>

        {/* Technology Filter */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter by Technology
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                className={`cursor-pointer capitalize transition-all ${
                  selectedTech === tech 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
          {(selectedCategory !== 'all' || selectedTech !== 'all') && (
            <Button
              variant="ghost"
              size="sm"
              className="mt-4 text-primary hover:text-primary/80"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTech('all');
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-cyan-500 text-white">{project.category}</Badge>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-teal-500 text-white">Featured</Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Problem */}
                <div>
                  <h3 className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2 uppercase tracking-wide">
                    Problem
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2 uppercase tracking-wide">
                    Solution
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wide">
                    Impact
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                    {project.impact}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="flex-1 bg-cyan-500 hover:bg-cyan-600" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
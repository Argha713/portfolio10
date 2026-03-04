import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Code, Brain, Lightbulb, ExternalLink, Github, Download, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { profile, services, projects, testimonials } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SkillsVisualization from '../components/SkillsVisualization';
import GitHubActivity from '../components/GitHubActivity';
import ContactForm from '../components/ContactForm';

const iconMap = {
  database: Database,
  code: Code,
  brain: Brain,
  lightbulb: Lightbulb
};

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section with Animations */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Availability Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              {profile.availability}
            </div>

            {/* Main Heading with Typewriter Effect */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <TypeAnimation
                sequence={[
                  profile.tagline,
                  2000,
                  'Building RAG Systems in .NET',
                  2000,
                  'Integrating LLMs with Azure',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              />
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {profile.shortBio}
            </p>

            {/* Bio */}
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {profile.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link to="/projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group shadow-lg shadow-primary/25">
                  View My Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={profile.resumeUrl} download>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <a href={`mailto:${profile.email}`}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Mail className="mr-2 w-4 h-4" />
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized services bridging AI and enterprise .NET development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.id} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                Open-source AI solutions and enterprise integrations
              </p>
            </div>
            <Link to="/projects" className="hidden md:block">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.problem}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex-1 group/btn" asChild>
                      <Link to={`/projects#${project.id}`}>
                        View Details
                        <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/projects">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Visualization */}
      <SkillsVisualization />

      {/* GitHub Activity */}
      <GitHubActivity />

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by teams for AI and .NET expertise
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:border-primary/50 transition-colors hover:shadow-lg">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how AI and .NET can transform your business.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your .NET Applications with AI?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how RAG systems and LLM integration can solve your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${profile.email}`}>
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 shadow-lg">
                Start a Conversation
              </Button>
            </a>
            <Link to="/blog">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Read My Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

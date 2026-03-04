import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ArrowRight, Database, Code, Brain, Lightbulb, ExternalLink, Download, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { profile, services, projects, testimonials } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SkillsVisualization from '../components/SkillsVisualization';
import GitHubActivity from '../components/GitHubActivity';
import ContactForm from '../components/ContactForm';
import ParticleHero from '../components/ParticleHero';

const iconMap = {
  database: Database,
  code: Code,
  brain: Brain,
  lightbulb: Lightbulb
};

// Animated Section Wrapper with scroll reveal
const AnimatedSection = ({ children, direction = 'up', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Floating Card Component
const FloatingCard = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative">
      {/* Particle Hero Section with Parallax */}
      <ParticleHero>
        <motion.section
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative min-h-screen flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl">
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6'
              >
                <span className='w-2 h-2 bg-primary rounded-full mr-2 animate-pulse'></span>
                {profile.availability}
              </motion.div>

              {/* Main Heading with Typewriter */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'
              >
                <TypeAnimation
                  sequence={[
                    profile.tagline,
                    2000,
                    'Building RAG Systems in .NET',
                    2000,
                    'Integrating LLMs with Azure',
                    2000
                  ]}
                  wrapper='span'
                  speed={50}
                  repeat={Infinity}
                  className='bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent'
                />
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed'
              >
                {profile.shortBio}
              </motion.p>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl'
              >
                {profile.bio}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='flex flex-col sm:flex-row gap-4'
              >
                <Link to='/projects'>
                  <Button size='lg' className='bg-primary hover:bg-primary/90 text-white group shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30'>
                    View My Projects
                    <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </Button>
                </Link>
                <a href={profile.resumeUrl} download>
                  <Button size='lg' variant='outline' className='border-primary text-primary hover:bg-primary/10 transition-all'>
                    <Download className='mr-2 w-4 h-4' />
                    Download Resume
                  </Button>
                </a>
                <a href={`mailto:${profile.email}`}>
                  <Button size='lg' className='bg-foreground hover:bg-foreground/90 text-background transition-all'>
                    <Mail className='mr-2 w-4 h-4' />
                    Contact Me
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className='w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2'
            >
              <motion.div className='w-1.5 h-1.5 bg-primary rounded-full' />
            </motion.div>
          </motion.div>
        </motion.section>
      </ParticleHero>

      {/* Services Section - Slides from Right */}
      <Parallax speed={-5}>
        <section className='py-32 bg-gradient-to-b from-background to-secondary/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <AnimatedSection direction='right'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4'>What I Do</h2>
                <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                  Specialized services bridging AI and enterprise .NET development
                </p>
              </div>
            </AnimatedSection>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {services.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <FloatingCard key={service.id} index={index}>
                    <Card className='h-full group hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10'>
                      <CardHeader>
                        <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300'>
                          <Icon className='w-7 h-7 text-primary' />
                        </div>
                        <CardTitle className='text-2xl'>{service.title}</CardTitle>
                        <CardDescription className='text-base leading-relaxed'>
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className='flex flex-wrap gap-2'>
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} variant='secondary' className='text-xs'>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </FloatingCard>
                );
              })}
            </div>
          </div>
        </section>
      </Parallax>

      {/* Featured Projects - Sticky Section */}
      <section className='py-32 bg-gradient-to-b from-secondary/20 to-background relative'>
        <Parallax speed={-10}>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <AnimatedSection direction='left'>
              <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-16'>
                <div>
                  <h2 className='text-4xl md:text-5xl font-bold mb-4'>Featured Projects</h2>
                  <p className='text-xl text-muted-foreground'>
                    Open-source AI solutions and enterprise integrations
                  </p>
                </div>
                <Link to='/projects' className='mt-4 md:mt-0'>
                  <Button variant='outline' className='border-primary text-primary hover:bg-primary/10'>
                    View All Projects
                    <ArrowRight className='ml-2 w-4 h-4' />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {featuredProjects.map((project, index) => (
                <FloatingCard key={project.id} index={index}>
                  <Card className='group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-primary/50 h-full flex flex-col'>
                    <div className='relative h-52 overflow-hidden'>
                      <Parallax speed={5}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                      </Parallax>
                      <div className='absolute top-4 right-4'>
                        <Badge className='bg-primary text-white shadow-lg'>
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className='flex-grow'>
                      <CardTitle className='text-xl line-clamp-2 group-hover:text-primary transition-colors'>
                        {project.title}
                      </CardTitle>
                      <CardDescription className='line-clamp-3'>
                        {project.problem}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} variant='secondary' className='text-xs'>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Link to={`/projects#${project.id}`}>
                        <Button variant='ghost' size='sm' className='w-full group/btn hover:bg-primary/10 hover:text-primary'>
                          View Details
                          <ExternalLink className='ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform' />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </FloatingCard>
              ))}
            </div>
          </div>
        </Parallax>
      </section>

      {/* Skills Visualization - Parallax Background */}
      <Parallax speed={-8}>
        <div className='bg-gradient-to-b from-background to-secondary/30'>
          <AnimatedSection direction='up'>
            <SkillsVisualization />
          </AnimatedSection>
        </div>
      </Parallax>

      {/* GitHub Activity - Slides from Left */}
      <Parallax speed={-6}>
        <AnimatedSection direction='left'>
          <GitHubActivity />
        </AnimatedSection>
      </Parallax>

      {/* Testimonials - Floating Cards */}
      <section className='py-32 bg-gradient-to-b from-secondary/30 to-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <AnimatedSection direction='right'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-4'>What Clients Say</h2>
              <p className='text-xl text-muted-foreground'>
                Trusted by teams for AI and .NET expertise
              </p>
            </div>
          </AnimatedSection>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <FloatingCard key={testimonial.id} index={index}>
                <Card className='hover:border-primary/50 transition-all hover:shadow-xl h-full'>
                  <CardContent className='pt-8'>
                    <p className='text-muted-foreground mb-6 italic leading-relaxed'>
                      '{testimonial.content}'
                    </p>
                    <div className='flex items-center gap-3'>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className='w-12 h-12 rounded-full ring-2 ring-primary/20'
                      />
                      <div>
                        <p className='font-semibold'>{testimonial.name}</p>
                        <p className='text-sm text-muted-foreground'>{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Fade In */}
      <Parallax speed={-4}>
        <section className='py-32 bg-gradient-to-b from-background to-secondary/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <AnimatedSection direction='up'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4'>Let's Work Together</h2>
                <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                  Have a project in mind? Let's discuss how AI and .NET can transform your business.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction='up' delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </section>
      </Parallax>

      {/* CTA Section - Final Parallax */}
      <Parallax speed={-2}>
        <section className='relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white py-32'>
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
          </div>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
            <AnimatedSection direction='up'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Ready to Transform Your .NET Applications with AI?
              </h2>
              <p className='text-xl mb-10 opacity-90'>
                Let's discuss how RAG systems and LLM integration can solve your business challenges.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a href={`mailto:${profile.email}`}>
                  <Button size='lg' className='bg-white text-primary hover:bg-gray-100 shadow-xl'>
                    Start a Conversation
                  </Button>
                </a>
                <Link to='/blog'>
                  <Button size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
                    Read My Blog
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Parallax>
    </div>
  );
};

export default Home;

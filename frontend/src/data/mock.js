// Mock data for the portfolio

export const profile = {
  name: "Your Name",
  title: ".NET & AI Developer",
  tagline: "Helping enterprises integrate AI into .NET ecosystems",
  bio: "Specialized in building scalable RAG systems and LLM integrations for enterprise .NET applications. Passionate about bridging the gap between traditional enterprise software and cutting-edge AI capabilities.",
  email: "your.email@example.com",
  location: "Your Location",
  availability: "Available for freelance projects",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  },
  analytics: {
    ga4MeasurementId: "G-XXXXXXXXXX" // Replace with your GA4 ID
  }
};

export const services = [
  {
    id: 1,
    title: "RAG System Development",
    description: "Build production-ready Retrieval-Augmented Generation systems that enhance LLMs with your enterprise data, ensuring accurate and contextual AI responses.",
    icon: "database",
    technologies: ["LangChain", "Vector DBs", "OpenAI", "Azure AI"]
  },
  {
    id: 2,
    title: "LLM Integration",
    description: "Seamlessly integrate Large Language Models into your .NET applications with robust error handling, token optimization, and enterprise-grade security.",
    icon: "brain",
    technologies: ["GPT-4", "Claude", "Semantic Kernel", ".NET"]
  },
  {
    id: 3,
    title: ".NET Enterprise Solutions",
    description: "Develop scalable, maintainable .NET applications using clean architecture principles, microservices, and cloud-native patterns.",
    icon: "code",
    technologies: ["ASP.NET Core", "Azure", "SQL Server", "Docker"]
  },
  {
    id: 4,
    title: "AI Consulting & Strategy",
    description: "Help teams understand AI capabilities, identify use cases, and create roadmaps for successful AI adoption in enterprise environments.",
    icon: "lightbulb",
    technologies: ["AI Strategy", "Technical Leadership", "Training"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Enterprise Document Intelligence Platform",
    category: "RAG System",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    problem: "A Fortune 500 company struggled with information retrieval across 10,000+ internal documents. Employees spent hours searching for information, leading to decreased productivity and duplicated work.",
    solution: "Developed a custom RAG system using LangChain and Azure OpenAI, integrated with their existing .NET infrastructure. Implemented semantic search, document chunking strategies, and a conversational interface.",
    impact: "Reduced information retrieval time by 85%. Processed 50,000+ queries in the first month with 92% user satisfaction. Saved an estimated 2,000 employee hours monthly.",
    technologies: ["C#", "LangChain", "Azure OpenAI", "Vector Search", "ASP.NET Core"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "AI-Powered Customer Support Automation",
    category: "LLM Integration",
    featured: true,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
    problem: "A SaaS company faced overwhelming customer support tickets with 24-hour average response time, leading to customer churn and support team burnout.",
    solution: "Built an intelligent triage system using GPT-4 and .NET microservices. The system analyzes tickets, suggests solutions, and auto-responds to common queries while routing complex issues to human agents.",
    impact: "Automated 60% of tier-1 support tickets. Reduced average response time to 2 hours. Increased customer satisfaction score from 3.2 to 4.6/5.",
    technologies: ["GPT-4", ".NET 8", "Azure Functions", "SignalR", "Redis"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Legal Contract Analysis System",
    category: "AI & .NET",
    featured: true,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    problem: "Law firm needed to review hundreds of contracts monthly, a time-consuming process prone to human error and inconsistency.",
    solution: "Created a contract analysis tool using Claude API and .NET, capable of extracting key clauses, identifying risks, and comparing terms against standard templates.",
    impact: "Reduced contract review time by 70%. Identified 95% of critical clauses accurately. Enabled lawyers to focus on strategic work rather than document parsing.",
    technologies: ["Claude AI", "C#", "Entity Framework", "Blazor", "SQL Server"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Microservices Migration & Modernization",
    category: ".NET Architecture",
    featured: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    problem: "Legacy monolithic .NET Framework application causing deployment bottlenecks and limiting scalability for growing user base.",
    solution: "Led migration to .NET 8 microservices architecture with Docker containerization, API Gateway, and event-driven communication patterns.",
    impact: "Achieved 10x faster deployment cycles. Improved system scalability to handle 500% traffic increase. Reduced infrastructure costs by 40%.",
    technologies: [".NET 8", "Docker", "Kubernetes", "RabbitMQ", "PostgreSQL"],
    link: "#",
    github: "#"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Production-Ready RAG Systems: Lessons from the Trenches",
    excerpt: "After deploying multiple RAG systems to enterprise environments, I've learned what separates proof-of-concepts from production systems. Here are the key challenges and solutions.",
    category: "AI",
    tags: ["RAG", "LLMs", "Best Practices"],
    date: "2025-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    slug: "building-production-ready-rag-systems"
  },
  {
    id: 2,
    title: "Semantic Kernel vs LangChain: A .NET Developer's Perspective",
    excerpt: "Comparing the two major frameworks for LLM orchestration from a .NET-first viewpoint. Which one should you choose for your next project?",
    category: ".NET",
    tags: ["Semantic Kernel", "LangChain", ".NET", "Comparison"],
    date: "2025-01-08",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    slug: "semantic-kernel-vs-langchain"
  },
  {
    id: 3,
    title: "Cost Optimization Strategies for LLM-Powered Applications",
    excerpt: "Token costs can spiral out of control quickly. Learn practical strategies to optimize your LLM usage without sacrificing quality.",
    category: "AI",
    tags: ["Cost Optimization", "LLMs", "Performance"],
    date: "2024-12-20",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    slug: "cost-optimization-llm-applications"
  },
  {
    id: 4,
    title: "Clean Architecture in .NET 8: Practical Implementation Guide",
    excerpt: "A hands-on guide to implementing clean architecture principles in modern .NET applications, with real-world examples and trade-offs.",
    category: ".NET",
    tags: [".NET 8", "Architecture", "Clean Code"],
    date: "2024-12-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    slug: "clean-architecture-dotnet-8"
  },
  {
    id: 5,
    title: "The Freelancer's Guide to Pricing AI Development Projects",
    excerpt: "AI projects have unique challenges when it comes to pricing. Learn how to scope, estimate, and price your AI consulting work effectively.",
    category: "Freelancing",
    tags: ["Freelancing", "Pricing", "Business"],
    date: "2024-11-28",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    slug: "freelancer-guide-pricing-ai-projects"
  },
  {
    id: 6,
    title: "Vector Databases Compared: Pinecone, Weaviate, and Qdrant",
    excerpt: "Not all vector databases are created equal. A detailed comparison to help you choose the right one for your RAG system.",
    category: "AI",
    tags: ["Vector Databases", "RAG", "Infrastructure"],
    date: "2024-11-15",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    slug: "vector-databases-compared"
  }
];

export const skills = {
  ai: ["RAG Systems", "LangChain", "Semantic Kernel", "OpenAI API", "Azure AI", "Vector Databases", "Prompt Engineering"],
  dotnet: [".NET 8", "ASP.NET Core", "C#", "Entity Framework", "Blazor", "Minimal APIs", "SignalR"],
  cloud: ["Azure", "Docker", "Kubernetes", "Azure Functions", "Service Bus"],
  databases: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Cosmos DB"]
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechCorp Solutions",
    company: "TechCorp",
    content: "Exceptional work on our RAG implementation. The system handles complex queries with impressive accuracy, and the integration with our existing .NET stack was seamless.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "VP of Engineering",
    company: "DataFlow Inc",
    content: "Delivered a production-ready LLM integration ahead of schedule. The attention to error handling and cost optimization was outstanding. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "LegalTech Pro",
    content: "Transformed our contract analysis workflow. The AI system is accurate, fast, and our legal team loves it. Great communication throughout the project.",
    avatar: "https://i.pravatar.cc/150?img=9"
  }
];
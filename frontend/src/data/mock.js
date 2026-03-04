// Real data for Argha Sarkar's portfolio

export const profile = {
  name: "Argha Sarkar",
  title: ".NET Developer Building AI-Powered Applications",
  tagline: "Helping enterprises integrate AI into .NET ecosystems",
  shortBio: "RAG, Vector Search, LLMs | 5+ Years C# & Azure | Open to Remote Opportunities",
  bio: "I help enterprises add AI capabilities to their .NET systems without rebuilding everything in Python. With 5+ years of C# and .NET experience, I specialize in bridging the gap between traditional enterprise applications and modern AI. Most AI developers only know Python. Most .NET developers haven't touched AI. I do both.",
  email: "argha2.sarkar@gmail.com",
  phone: "+91 9903136302",
  location: "Kolkata, West Bengal, India",
  availability: "Open to Remote Opportunities",
  resumeUrl: "/resume/Argha_Sarkar_Resume.pdf",
  whatsapp: "919903136302",
  social: {
    github: "https://github.com/Argha713",
    linkedin: "https://www.linkedin.com/in/argha-sarkar-12538a21a",
    twitter: "https://twitter.com",
    email: "argha2.sarkar@gmail.com"
  },
  analytics: {
    ga4MeasurementId: "G-XXXXXXXXXX"
  }
};

export const services = [
  {
    id: 1,
    title: "RAG System Development",
    description: "Build production-ready Retrieval-Augmented Generation systems that enhance LLMs with your enterprise data, ensuring accurate and contextual AI responses.",
    icon: "database",
    technologies: ["LangChain", "Vector Databases", "Azure OpenAI", "Embeddings"]
  },
  {
    id: 2,
    title: "LLM Integration for .NET",
    description: "Seamlessly integrate Large Language Models into your .NET applications with robust error handling, token optimization, and enterprise-grade security.",
    icon: "brain",
    technologies: ["Azure OpenAI", "Ollama", "GPT-4", "Semantic Kernel"]
  },
  {
    id: 3,
    title: ".NET Enterprise Development",
    description: "Develop scalable, maintainable .NET applications using clean architecture, ASP.NET Core, Entity Framework, and modern cloud-native patterns.",
    icon: "code",
    technologies: ["ASP.NET Core", "C#", "Azure", "Entity Framework", "Docker"]
  },
  {
    id: 4,
    title: "AI Consulting & Architecture",
    description: "Strategic guidance for AI adoption in enterprise environments. Help teams identify use cases, design systems, and implement AI solutions effectively.",
    icon: "lightbulb",
    technologies: ["System Design", "AI Strategy", "Technical Leadership"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Model Context Protocol (MCP) Server",
    category: "AI & Open Source",
    featured: true,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    problem: "AI assistants like Claude Desktop lack direct integration with enterprise tools. Developers need a standardized way to connect AI to their existing systems like SQL databases, Git repositories, and file systems.",
    solution: "Built a production-ready Model Context Protocol server in .NET 8 that connects AI assistants to 9 enterprise tools (SQL Server, Files, Git, HTTP, System Info, etc.). Implements the MCP specification with transport layers for both stdio and SSE.",
    impact: "Published on NuGet with comprehensive documentation. Works seamlessly with Claude Desktop, VS Code, Cursor, and other MCP-compatible clients. Includes 150+ unit tests for reliability. Now used by developers worldwide.",
    technologies: ["C#", ".NET 8", "MCP Protocol", "xUnit", "Dependency Injection"],
    link: "https://github.com/Argha713/dotnet-mcp-server",
    github: "https://github.com/Argha713/dotnet-mcp-server"
  },
  {
    id: 2,
    title: "Production RAG API in .NET 8",
    category: "RAG & AI",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    problem: "Enterprises need to make their documents searchable and queryable using AI, but most RAG solutions are Python-based and don't integrate well with existing .NET infrastructure.",
    solution: "Developed a complete RAG system in .NET 8 with document ingestion, vector storage, semantic search, and LLM-powered Q&A. Supports both Ollama (local) and Azure OpenAI. Features chunking strategies, embeddings generation, and citation tracking.",
    impact: "Production-ready API with 68 unit tests. Processes multiple document formats (PDF, DOCX, TXT). Provides accurate answers with source citations. Enables enterprises to leverage their document knowledge base with AI.",
    technologies: [".NET 8", "Azure OpenAI", "Ollama", "Vector Search", "Semantic Kernel"],
    link: "https://github.com/Argha713/dotnet-rag-api",
    github: "https://github.com/Argha713/dotnet-rag-api"
  },
  {
    id: 3,
    title: "Dynamics 365 Business Central Connector",
    category: ".NET Enterprise",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    problem: "Client needed to integrate EasyReports BI tool with Microsoft Dynamics 365 Business Central for enterprise reporting, but no connector existed for seamless data flow.",
    solution: "Built a fully web-based connector application using ASP.NET Core MVC that bridges EasyReports BI and Dynamics 365 Business Central. Implemented OAuth authentication, API integration, and real-time data synchronization.",
    impact: "Enabled enterprise-wide reporting across Dynamics 365 data. Reduced manual data entry by 90%. Now used daily by finance and operations teams for critical business intelligence.",
    technologies: ["ASP.NET Core MVC", "Dynamics 365 API", "OAuth", "SQL Server", "REST APIs"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "FinReporter - Financial Reporting System",
    category: ".NET Enterprise",
    featured: false,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    problem: "Legacy financial reporting system was built with Windows Forms 2-tier architecture. Code was hard to maintain, test, and extend. New features took weeks to implement.",
    solution: "Redesigned the Data Access Layer (DAL) and migrated to ASP.NET Core MVC web application. Implemented clean architecture principles with separation of concerns, making the codebase maintainable and testable.",
    impact: "Development velocity increased 3x. Junior developers can now contribute effectively with clear patterns. System is now web-based, accessible from anywhere, and much easier to deploy and maintain.",
    technologies: ["ASP.NET Core MVC", "C#", "Entity Framework", "Clean Architecture", "SQL Server"],
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Tally-EasyReports Sync Service",
    category: ".NET Enterprise",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    problem: "Manual data synchronization between Tally accounting software and EasyReports BI tool was time-consuming, error-prone, and caused data inconsistencies.",
    solution: "Developed a Windows Service application that automatically syncs master and transaction data between Tally and EasyReports. Implemented scheduled jobs, error handling, and conflict resolution.",
    impact: "Eliminated manual data entry. Real-time synchronization ensures data accuracy. Service runs 24/7 with automatic retry mechanisms, processing thousands of records daily.",
    technologies: ["C#", "Windows Services", ".NET Framework", "Tally API", "SQL Server"],
    link: "#",
    github: "#"
  }
];

export const workExperience = [
  {
    id: 1,
    company: "CodeClouds",
    position: "Web Engineer",
    duration: "September 2024 - Present",
    location: "Remote",
    description: "Currently exploring AI integration with .NET — building RAG systems, vector search, and LLM-powered features for enterprise applications.",
    technologies: ["RAG", "LLMs", "Vector Search", ".NET 8", "Azure OpenAI"],
    highlights: [
      "Built production-ready RAG system with document ingestion and semantic search",
      "Developed MCP server for AI assistant integration with enterprise tools",
      "Published open-source .NET AI libraries on NuGet"
    ]
  },
  {
    id: 2,
    company: "Orchid Technical Consultancy P Ltd",
    position: "Senior Product Developer",
    duration: "April 2023 - September 2024",
    location: "Kolkata, India",
    description: "Led technical initiatives, mentored developers, and architected enterprise BI solutions.",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Dynamics 365", "Azure"],
    highlights: [
      "Built Dynamics 365 Business Central connector for enterprise reporting",
      "Redesigned FinReporter DAL, migrating from Windows Forms to ASP.NET Core MVC",
      "Implemented asynchronous processing for long-running tasks with real-time progress updates",
      "Mentored junior developers and provided technical guidance"
    ]
  },
  {
    id: 3,
    company: "Orchid Technical Consultancy P Ltd",
    position: "Product Developer",
    duration: "September 2021 - April 2023",
    location: "Kolkata, India",
    description: "Developed and maintained EasyReports BI tool and custom enterprise solutions.",
    technologies: ["C#", ".NET Framework", "WPF", "SQL Server", "REST APIs"],
    highlights: [
      "Maintained EasyReports BI tool and resolved critical bugs",
      "Developed Windows Service for Tally-EasyReports data synchronization",
      "Implemented core features with async processing and UI feedback mechanisms"
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "West Bengal University of Technology, Kolkata",
    degree: "Bachelor of Technology (B.Tech)",
    duration: "2013 - 2017",
    field: "Computer Science & Engineering"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    code: "AZ-900",
    date: "2024",
    credentialUrl: "#"
  },
  {
    id: 2,
    name: "Foundational C# with Microsoft",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "#"
  }
];

export const skills = {
  ai: {
    title: "AI & Machine Learning",
    items: [
      { name: "RAG Systems", level: 95 },
      { name: "Vector Databases", level: 90 },
      { name: "LLM Integration", level: 90 },
      { name: "Embeddings", level: 85 },
      { name: "Azure OpenAI", level: 85 },
      { name: "Ollama", level: 80 },
      { name: "Semantic Kernel", level: 75 }
    ]
  },
  dotnet: {
    title: ".NET & C#",
    items: [
      { name: "C#", level: 95 },
      { name: ".NET 8", level: 90 },
      { name: "ASP.NET Core", level: 90 },
      { name: "Entity Framework", level: 85 },
      { name: "WPF", level: 80 },
      { name: "Blazor", level: 70 }
    ]
  },
  cloud: {
    title: "Cloud & DevOps",
    items: [
      { name: "Azure", level: 85 },
      { name: "Azure Functions", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Azure DevOps", level: 75 }
    ]
  },
  databases: {
    title: "Databases & APIs",
    items: [
      { name: "SQL Server", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 }
    ]
  }
};

export const testimonials = [
  {
    id: 1,
    name: "Senior Engineering Manager",
    role: "Engineering Leadership",
    company: "CodeClouds",
    content: "Argha's expertise in bridging .NET and AI is exceptional. His RAG implementation significantly improved our document intelligence capabilities.",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 2,
    name: "Product Manager",
    role: "Product Management",
    company: "Orchid Technical Consultancy",
    content: "The Dynamics 365 connector Argha built transformed our reporting workflow. His clean architecture approach made the codebase highly maintainable.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    name: "Technical Lead",
    role: "Development Team Lead",
    company: "Orchid Technical Consultancy",
    content: "Argha's mentorship helped our junior developers grow rapidly. His async processing implementation was a game-changer for user experience.",
    avatar: "https://i.pravatar.cc/150?img=8"
  }
];
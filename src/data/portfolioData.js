export const personalInfo = {
  name: "Ajeethkumar Muruganandham",
  shortName: "Ajeethkumar M.",
  role: "Senior AI Engineer",
  tagline: "Autonomous Multi-Agent Systems & Cognitive AI Engineer",
  location: "Chennai, India",
  email: "ajkmr2525@gmail.com",
  github: "https://github.com/Ajeethkumar-25",
  linkedin: "https://linkedin.com/in/ajeethkumar-muruganandham",
  experienceYears: "5+",
  accuracyMetric: "94%",
  education: "Master of Computer Applications (MCA in AI & ML) — Chandigarh University",
  bachelors: "Bachelor of Science in Computer Technology — Bharathiar University",
  philosophy: "Reason ➔ Plan ➔ Act ➔ Self-Correct ➔ Scale"
};

export const projectsData = [
  {
    id: "gtmer",
    number: "01",
    title: "GTMer — Enterprise AI Sales Development SaaS",
    category: "agentic",
    badge: "Flagship SaaS Platform",
    badgeColor: "cyan",
    tagline: "Full-suite multi-tenant AI SDR platform automating B2B go-to-market pipelines.",
    description: "Architected and built a production-grade enterprise multi-tenant AI SDR platform featuring 31+ feature modules and 6+ microservices. Integrates LangGraph multi-agent graphs with AWS Bedrock to automate B2B outbound workflows, deep website enrichment, AI email writing (119KB template editor), AI voice calling, D3.js knowledge graphs, and credit-metered Razorpay subscriptions.",
    highlights: [
      "LangGraph + AWS Bedrock multi-agent SDR graphs for autonomous lead discovery & outreach.",
      "Soul AI auto-crawler synthesizing company ICP personas with D3 force graph visualizer.",
      "FastAPI microservices architecture on AWS with Docker, Kafka, and Redis Streams.",
      "Razorpay multi-tenant subscription gating, credit metering, and automated wallet top-ups."
    ],
    tags: ["LangGraph", "AWS Bedrock", "FastAPI", "React 19", "Kafka", "Redis Streams", "Docker", "AWS", "D3.js"],
    stats: [
      { label: "Modules", value: "31+" },
      { label: "Services", value: "6+" },
      { label: "Pipeline", value: "100% Auto" }
    ],
    featured: true
  },
  {
    id: "carry",
    number: "02",
    title: "Carry Agent — Dual-Memory Cognitive AI Agent",
    category: "agentic",
    badge: "Cognitive Innovation",
    badgeColor: "purple",
    tagline: "Autonomous software engineer agent combining Knowledge Graphs with Vector RAG.",
    description: "Designed a cognitive software engineering agent that reasons, plans, audits, and self-corrects before and during code execution. Combines Neo4j knowledge graphs (concept & tool dependency mapping) with dynamic vector RAG, calculates requirement clarity (0–100 score), and runs an automated self-correction loop when execution tests fail.",
    highlights: [
      "Dual-Engine Memory: Concept & Dependency Knowledge Graphs + Dynamic Vector RAG.",
      "Requirement Clarity & Risk Scoring (0–100 scale) for intelligent scope validation.",
      "Multi-factor audit engine validating security standards, cost limits, and architecture rules.",
      "Real-time runtime error introspection and automated code self-correction loops."
    ],
    tags: ["Knowledge Graphs", "Neo4j", "ChromaDB", "LangGraph", "FastAPI", "Ollama", "Docker"],
    stats: [
      { label: "Clarity Score", value: "0-100" },
      { label: "Self-Correction", value: "Real-time" },
      { label: "Memory", value: "Dual KG+RAG" }
    ],
    featured: true
  },
  {
    id: "aitesting",
    number: "03",
    title: "Autonomous Test Engineering & Self-Healing Engine",
    category: "testing",
    badge: "AST Engine",
    badgeColor: "green",
    tagline: "Self-healing Playwright automation framework driven by Static AST Code Analysis.",
    description: "End-to-end automated quality engineering system that statically parses frontend repositories (Java/TypeScript/JSX) using Tree-Sitter AST parsers to discover DOM locators and routes, coupled with autonomous agents that detect runtime breakages and heal Playwright test scripts on-the-fly.",
    highlights: [
      "Tree-Sitter AST static code parsing across Java, TypeScript, and React JSX.",
      "Multi-tier agent network (Orchestrator, Coverage Agent, Fixer) patching broken selectors.",
      "Automated live script generation, dry-run validations, and fallback locator healing."
    ],
    tags: ["Tree-Sitter AST", "Playwright POM", "FastAPI", "Python", "OpenAI / Claude API", "PostgreSQL"],
    stats: [
      { label: "Self-Healing", value: "94%" },
      { label: "AST Coverage", value: "100%" },
      { label: "Validation", value: "Live Dry-Run" }
    ],
    featured: true
  },
  {
    id: "paustika",
    number: "04",
    title: "Paushtik Aahaar — Enterprise AI Assistant & RAG",
    category: "rag",
    badge: "Active AI Chatbot",
    badgeColor: "amber",
    tagline: "Production-grade conversational AI assistant with zero-hallucination DB tool bindings.",
    description: "Production conversational AI chatbot for a healthy meal platform with strict domain containment, zero-hallucination policies, LangGraph state-machine routing, ChromaDB semantic retrieval, and live PostgreSQL read-only database tool bindings.",
    highlights: [
      "Pre-LLM safety guard node intercepting off-topic queries to conserve tokens and prevent jailbreaks.",
      "Deterministic LangChain DB tool binding to read-only views for exact nutritional/pricing data.",
      "Dual-Store Architecture: Async MongoDB for conversation sessions & PostgreSQL for catalog querying."
    ],
    tags: ["LangGraph", "ChromaDB", "FastAPI", "PostgreSQL", "MongoDB", "React", "Docker Compose"],
    stats: [
      { label: "Hallucination", value: "0%" },
      { label: "Domain Safe", value: "100%" },
      { label: "Database", value: "Dual Async" }
    ],
    featured: false
  },
  {
    id: "openclaw",
    number: "05",
    title: "OpenClaw Multi-Agent Gateway & Automations",
    category: "agentic",
    badge: "Enterprise Gateway",
    badgeColor: "blue",
    tagline: "Enterprise multi-agent framework supporting WhatsApp/Telegram gateways & tool approvals.",
    description: "Autonomous multi-agent engine deployed on OpenClaw supporting dynamic agent role handoffs, custom tool execution approvals (`exec-approvals`), delivery queues, and custom WhatsApp & Telegram messaging gateways.",
    highlights: [
      "Telegram & WhatsApp conversational AI gateways for enterprise process automation.",
      "Granular tool execution security approvals and background heartbeat monitoring.",
      "Persistent agent state tracking and automated multi-channel delivery queues."
    ],
    tags: ["OpenClaw", "LangGraph", "Telegram Bot API", "WhatsApp API", "Redis", "Docker"],
    stats: [
      { label: "Swarms", value: "Multi-Agent" },
      { label: "Uptime", value: "24/7 Heartbeat" },
      { label: "Approvals", value: "Policy-Gated" }
    ],
    featured: false
  },
  {
    id: "benchmarking",
    number: "06",
    title: "Enterprise LLM Benchmarking Suite",
    category: "cloud",
    badge: "Evaluation Platform",
    badgeColor: "violet",
    tagline: "Automated LLM evaluator measuring latency, token costs, Exact Match & code execution.",
    description: "Controlled evaluation suite testing models on latency, token costs, Exact Match, Word F1, and sandboxed code execution with real-time Telegram Bot controls and Matplotlib radar charts.",
    highlights: [
      "Integrates with OpenClaw OpenAI-compatible proxy to track accurate latency & token statistics.",
      "Interactive Telegram Bot with inline keyboards, live progress notifications, and leaderboards.",
      "Generates Matplotlib radar charts for capability profiling and latency vs cost tradeoff plots."
    ],
    tags: ["Python 3.12", "OpenClaw Proxy", "Telegram Bot API", "SQLite", "Matplotlib", "httpx"],
    stats: [
      { label: "Metrics", value: "Exact/F1" },
      { label: "Interface", value: "Telegram Bot" },
      { label: "Analysis", value: "Radar Plots" }
    ],
    featured: false
  }
];

export const experienceData = [
  {
    id: "annular",
    role: "Senior AI Engineer",
    company: "Annular Technologies",
    location: "Chennai, India",
    period: "May 2024 – Present",
    current: true,
    highlights: [
      "Developed and deployed GTMer — enterprise-grade multi-tenant AI SDR platform with LangGraph + AWS Bedrock orchestration.",
      "Engineered intelligent document processing pipelines achieving 94% extraction accuracy across invoices & contracts.",
      "Implemented production-ready RAG pipelines with vector search (ChromaDB, FAISS, Pinecone), reducing latency by 60%.",
      "Designed scalable multi-tenant architecture supporting organization data isolation, user permissions, and AI quota metering on AWS."
    ],
    tech: ["LangGraph", "AWS Bedrock", "Python", "FastAPI", "Kafka", "Redis Streams", "Docker", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Extraction Accuracy", value: "94%" },
      { label: "Latency Reduction", value: "60%" },
      { label: "Doc Types", value: "15+" }
    ]
  },
  {
    id: "reveille",
    role: "Technical Consultant (Backend & Software Engineering)",
    company: "Reveille Technologies",
    location: "Chennai, India",
    period: "Oct 2022 – Nov 2023",
    current: false,
    highlights: [
      "Developed and maintained Python-based backend applications and automation solutions for enterprise customers.",
      "Designed and implemented REST APIs, SQL queries, and backend services using Python and PostgreSQL.",
      "Converted complex business requirements into scalable technical solution blueprints, speeding delivery by 25%."
    ],
    tech: ["Python", "PostgreSQL", "REST APIs", "SQL", "Solution Engineering", "Docker"],
    metrics: [
      { label: "Enterprise Projects", value: "10+" },
      { label: "Delivery Acceleration", value: "25%" }
    ]
  },
  {
    id: "spicejet",
    role: "Technical Support Specialist",
    company: "SpiceJet Ltd",
    location: "Chennai, India",
    period: "Nov 2019 – Dec 2021",
    current: false,
    highlights: [
      "Delivered production support for enterprise airline reservation and booking systems with 95% first-contact resolution.",
      "Troubleshot database, payment gateway, and infrastructure incidents, reducing resolution time by 30%."
    ],
    tech: ["Production Support", "Troubleshooting", "System Optimization", "Incident Management"],
    metrics: [
      { label: "Resolution Rate", value: "95%" },
      { label: "Resolution Speedup", value: "30%" }
    ]
  }
];

export const skillsData = [
  {
    category: "Autonomous AI & Multi-Agent Systems",
    icon: "Bot",
    skills: ["LangGraph", "Carry Agent", "OpenClaw Swarms", "LangChain", "Agentic Workflows", "Model Context Protocol (MCP)", "Tool Calling", "Prompt Engineering"]
  },
  {
    category: "Foundation Models & Cloud AI",
    icon: "Brain",
    skills: ["AWS Bedrock", "OpenAI API", "Claude API (Anthropic)", "Gemini API", "Ollama (Local LLMs)", "TensorFlow", "PyTorch", "HuggingFace"]
  },
  {
    category: "Knowledge Graphs & Vector Memory",
    icon: "Network",
    skills: ["Knowledge Graphs (KG)", "Neo4j", "Dual KG + RAG", "ChromaDB", "Pinecone", "FAISS", "D3.js Force Graphs", "Hybrid Search"]
  },
  {
    category: "Backend Microservices & Event Streams",
    icon: "Server",
    skills: ["Python 3.12", "FastAPI", "GraphQL", "RESTful APIs", "Apache Kafka", "Redis Streams", "PostgreSQL", "MongoDB", "Async Processing"]
  },
  {
    category: "AST Static Analysis & Self-Healing Testing",
    icon: "Code",
    skills: ["Tree-Sitter AST Parsers", "Playwright POM", "Self-Healing Locators", "Autonomous Test Generation", "TypeScript AST", "Java AST"]
  },
  {
    category: "Cloud Infrastructure & DevOps",
    icon: "Cloud",
    skills: ["AWS (EC2, S3, CloudFront, Lambda, IAM, ALB)", "Docker & Docker Compose", "Nginx", "GitHub Actions CI/CD", "Linux / Bash", "Razorpay Gateway"]
  }
];

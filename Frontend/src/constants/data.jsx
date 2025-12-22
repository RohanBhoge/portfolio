import { Code, Server, Wrench, Database, Layout, Smartphone } from 'lucide-react';

export const PROFILE = {
  name: "Rohan Bhoge DevHelper",
  role: "Full Stack Engineer",
  headline: "Solving problems through code",
  description: "I build accessible, pixel-perfect, and performant web experiences. Focused on React, Node.js, AI and modern UI patterns.",
  location: "Pune, Maharashtra",
  email: "bhogerohan60@gmail.com",
  social: {
    github: "https://github.com/RohanBhoge",
    linkedin: "https://www.linkedin.com/in/rohanbhoge/",
  }
};

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 80 },
      { name: "HTML", level: 90 }
    ],
    icon: Layout
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Flask", level: 70 },
      { name: "Django", level: 65 },
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 65 }
    ],
    icon: Server
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", level: 90 },
      { name: "Postman", level: 95 },
      { name: "AWS", level: 50 },
      { name: "Hostinger", level: 50 },
      { name: "Vercel", level: 50 }
    ],
    icon: Wrench
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "QuickCart - Full-Stack E-commerce Website",
    description: "A comprehensive e-commerce solution featuring a dynamic product catalog, secure user authentication, and a streamlined checkout process. Integrated MongoDB for scalable data management and Node.js for high-performance server-side logic.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    codeLink: "https://github.com/RohanBhoge/quackart", 
    liveLink: "https://quackart.vercel.app/",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop"   
  },
  {
    id: 2,
    title: "VidTube - Full-Stack Video Streaming Platform",
    description: "A modern video sharing platform that allows users to upload, stream, and interact with content. Built with a responsive React frontend and a robust backend to handle video metadata and user engagement features like likes and comments.",
    tech: ["React", "Node.js", "Express.js", "Cloudinary API", "CSS"],
    codeLink: "https://github.com/RohanBhoge/vidtube",
    liveLink: "https://vidtube-7y3x.vercel.app/",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Fin-Friend: AI-Powered Financial Health Chatbot 🤖",
    description: "An intelligent financial assistant utilizing RAG (Retrieval-Augmented Generation) and LangChain to provide personalized financial advice. It leverages Gemini API and Hugging Face models to process user queries and deliver real-time financial health insights.",
    tech: ["Python", "Streamlit", "Gemini API", "LangChain", "RAG", "Hugging Face"],
    codeLink: "https://github.com/RohanBhoge/fin-friend",
    liveLink: "https://fin-friend-ol9qz4uzxeswhypx5avvza.streamlit.app/",
    image:"https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2074&auto=format&fit=crop" 
  }
];
export const EXPERIENCE = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Bisugen Technologies Pvt.Ltd",
    period: "2025 - Present",
    description: "Architecting and deploying scalable backend infrastructures using Node.js and Flask to power high-performance web applications. I specialize in designing flexible data models across both SQL and MongoDB databases while streamlining the development lifecycle through automated deployments on AWS, Hostinger, and Vercel. By leveraging Postman for rigorous API testing and GitHub for version control, I ensure the delivery of secure, reliable, and well-documented server-side solutions."
  },
];

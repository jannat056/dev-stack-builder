import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './Banner.jsx';
import TechnologyCard from './TechnologyCard.jsx';
import YourStack from './YourStack.jsx';
import './index.css';

function MainApp() {
  const [selectedStack, setSelectedStack] = useState([]);

  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      badge: "Popular",
      description: "A declarative, component-based JavaScript library for building modern user interfaces.",
      difficulty: "Beginner-Friendly",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
    },
    {
      id: 2,
      name: "Vue.js",
      category: "Frontend",
      badge: "Versatile",
      description: "An approachable, performant, and versatile framework for building web user interfaces.",
      difficulty: "Beginner-Friendly",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
    },
    {
      id: 3,
      name: "Svelte",
      category: "Frontend",
      badge: "Fast",
      description: "Cybernetically enhanced web apps with compile-time reactivity instead of virtual DOM overhead.",
      difficulty: "Intermediate",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/svelte/svelte.png"
    },
    {
      id: 4,
      name: "Next.js",
      category: "Fullstack",
      description: "The React framework for the web—enabling hybrid static & server rendering.",
      difficulty: "Intermediate",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nextjs/nextjs.png"
    },
    {
      id: 5,
      name: "Node.js",
      category: "Backend",
      badge: "Standard",
      description: "Asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
      difficulty: "Intermediate",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
    },
    {
      id: 6,
      name: "PostgreSQL",
      category: "Database",
      badge: "Top SQL",
      description: "A powerful, open source object-relational database system with proven reliability.",
      difficulty: "Intermediate",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
    },
    {
      id: 7,
      name: "Redis",
      category: "Database",
      badge: "Cache",
      description: "In-memory data structure store used as a database, cache, and message broker.",
      difficulty: "Intermediate",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redis/redis.png"
    },
    {
      id: 8,
      name: "JavaScript",
      category: "Language",
      badge: "Mendatory",
      description: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
      difficulty: "Beginner-Friendly",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
    },
    {
      id: 9,
      name: "TypeScript",
      category: "Language",
      badge: "Essential",
      description: "A strongly typed programming language that builds on JavaScript for robust tooling.",
      difficulty: "Intermediate",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
    },
    {
      id: 10,
      name: "Java",
      category: "Language",
      badge: "Robust",
      description: "A secure, object-oriented programming language designed for portability and scale.",
      difficulty: "Intermediate",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
    },
    {
      id: 11,
      name: "Tailwind CSS",
      category: "Styling",
      badge: "Modern",
      description: "A utility-first CSS framework packed with classes that can be composed to build any design.",
      difficulty: "Beginner-Friendly",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png"
    },
    {
      id: 12,
      name: "Docker",
      category: "DevOps",
      badge: "Container",
      description: "A platform for developers to build, share, and run applications with containers.",
      difficulty: "Intermediate",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"
    }
  ];

  const handleAddTech = (tech) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const handleRemoveTech = (id) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Banner />

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Explore the Technologies</h2>
          <p className="text-sm text-slate-500 mt-1">Pick your technology per category to build your ideal stack.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechnologyCard 
                key={tech.id} 
                tech={tech} 
                onAdd={handleAddTech} 
                isAdded={selectedStack.some((item) => item.id === tech.id)} 
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <YourStack selectedStack={selectedStack} onRemove={handleRemoveTech} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
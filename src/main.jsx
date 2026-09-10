import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './Banner.jsx';
import TechnologyCard from './TechnologyCard.jsx';
import YourStack from './YourStack.jsx';
import './index.css';

function MainApp() {
  const [selectedStack, setSelectedStack] = useState([]);

  // Technology List Data Source
  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      description: "A declarative, component-based JavaScript library for building modern user interfaces.",
      difficulty: "Beginner-Friendly",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
    },
    {
      id: 2,
      name: "Vue.js",
      category: "Frontend",
      description: "An approachable, performant, and versatile framework for building web user interfaces.",
      difficulty: "Beginner-Friendly",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
    },
    {
      id: 3,
      name: "Svelte",
      category: "Frontend",
      description: "Cybernetically enhanced web apps with compile-time reactivity instead of virtual DOM overhead.",
      difficulty: "Intermediate",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/svelte/svelte.png"
    },
    {
      id: 4,
      name: "Node.js",
      category: "Backend",
      description: "Asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
      difficulty: "Intermediate",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
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
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <Banner />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Technology Cards Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech) => (
              <TechnologyCard 
                key={tech.id} 
                tech={tech} 
                onAdd={handleAddTech} 
                isAdded={selectedStack.some((item) => item.id === tech.id)} 
              />
            ))}
          </div>

          {/* Selected Stack Sidebar */}
          <div>
            <YourStack selectedStack={selectedStack} onRemove={handleRemoveTech} />
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
);
import React, { useState, useEffect } from 'react';
import TechnologyCard from './TechnologyCard';

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechs, setSelectedTechs] = useState([]);

  // Fetch the technologies.json from the public folder
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error("Error loading technologies:", err));
  }, []);

  const toggleSelect = (techId) => {
    if (selectedTechs.includes(techId)) {
      setSelectedTechs(selectedTechs.filter(id => id !== techId));
    } else {
      setSelectedTechs([...selectedTechs, techId]);
    }
  };

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Explore Technologies
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Select your desired stack elements and watch the magical fairy glow bring your creation to life! ✨
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech) => (
          <TechnologyCard 
            key={tech.id}
            tech={tech}
            isSelected={selectedTechs.includes(tech.id)}
            onToggle={toggleSelect}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
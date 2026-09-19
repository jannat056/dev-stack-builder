import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import TechnologyCard from './TechnologyCard.jsx';
import YourStack from './YourStack.jsx';
import Footer from './Footer.jsx';
import './index.css';

function MainApp() {
  const [selectedStack, setSelectedStack] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading technologies:", err);
        setIsLoading(false);
        toast.error("Failed to load technologies!");
      });
  }, []);

  const handleAddTech = (tech) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`${tech.name} added to your stack!`);
    }
  };

  const handleRemoveTech = (id) => {
    const removedItem = selectedStack.find(item => item.id === id);
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.error(`${removedItem ? removedItem.name : 'Technology'} removed from stack!`);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast("All stack cleared!", { icon: '🗑️' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
      <Toaster position="top-right" />
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-8">
          <Banner />

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Explore the Technologies</h2>
            <p className="text-sm text-slate-500 mt-1">Pick your technology per category to build your ideal stack.</p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              <span className="ml-3 text-lg font-medium text-slate-600">Loading technologies...</span>
            </div>
          ) : (
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
                  <YourStack 
                    stack={selectedStack} 
                    onRemove={handleRemoveTech} 
                    onRemoveAll={handleRemoveAll} 
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
import React from 'react';

const TechnologyCard = ({ tech, onAdd, isAdded }) => {
  return (
    <div 
      className={`relative p-6 rounded-2xl bg-white transition-all duration-500 flex flex-col justify-between ${
        isAdded 
          ? 'border-2 border-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.35)] scale-[1.02]' 
          : 'border border-slate-200 hover:shadow-xl'
      }`}
    >
      {/* Fairy Glow Magical Aura Effect */}
      {isAdded && (
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-2xl blur-lg opacity-40 -z-10 animate-pulse"></div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 p-2 bg-slate-50 rounded-xl flex items-center justify-center shadow-inner border border-slate-100">
            <img src={tech.image} alt={tech.name} className="w-full h-full object-contain" />
          </div>
          <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full border border-orange-100">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">{tech.description}</p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 pt-4 border-t border-slate-100">
          <span className="bg-slate-100 px-2.5 py-1 rounded-md font-medium text-slate-700">{tech.category}</span>
          <span className="font-medium">{tech.difficulty}</span>
        </div>

        <button 
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-3 rounded-xl font-medium transition-all shadow-md flex items-center justify-center gap-2 ${
            isAdded 
              ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-pink-200 opacity-90 cursor-default' 
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? (
            <>
              <span>Added to Stack</span>
              <span className="animate-bounce">✨</span>
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
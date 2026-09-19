import React, { useState } from 'react';

const TechnologyCard = ({ tech, onAdd, isAdded }) => {
  const [imgError, setImgError] = useState(false);

  const name = tech?.name || tech?.title || 'Technology';
  const category = tech?.category || tech?.type || 'General';
  const description =
    tech?.description ||
    tech?.desc ||
    'A powerful technology for building modern applications.';
  const difficulty = tech?.difficulty || tech?.level || 'Beginner-Friendly';

  // Ratings Mapping
  const ratings = {
    react: '4.9',
    'react.js': '4.9',
    vue: '4.8',
    'vue.js': '4.8',
    svelte: '4.8',
    'next.js': '4.9',
    nextjs: '4.9',
    'node.js': '4.8',
    nodejs: '4.8',
    postgresql: '4.9',
    redis: '4.8',
    javascript: '4.9',
    typescript: '4.9',
    java: '4.6',
    tailwind: '4.9',
    'tailwind css': '4.9',
    docker: '4.9',
  };

  const normalizedName = name.toLowerCase().trim();
  const rating = ratings[normalizedName] || tech?.rating || tech?.score || '4.9';
  
  const badge =
    normalizedName === 'javascript'
      ? 'Ubiquitous'
      : tech?.badge || tech?.tag || '';

  // Image Source Handler
  const getImageSrc = () => {
    if (tech?.image) {
      if (tech.image.startsWith('http')) return tech.image;
      return `${import.meta.env.BASE_URL}${tech.image}`;
    }
    if (tech?.icon) return tech.icon;
    if (tech?.logo) return tech.logo;

    const formattedName = name.toLowerCase().replace(/[\s.]+/g, '');
    if (formattedName.includes('next')) return `${import.meta.env.BASE_URL}nextjs.png`;
    if (formattedName.includes('svelte')) return `${import.meta.env.BASE_URL}svelte.png`;

    return '';
  };

  const imageSrc = getImageSrc();

  // Dynamic Badge Color Generator
  const getBadgeStyles = (badgeText) => {
    const text = badgeText?.toLowerCase() || '';
    switch (text) {
      case 'popular': return 'bg-sky-50 text-sky-600 border-sky-100';
      case 'versatile': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'essential': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'modern': return 'bg-cyan-50 text-cyan-600 border-cyan-100';
      case 'cache': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'fast': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'robust': return 'bg-teal-50 text-teal-600 border-teal-100';
      case 'ubiquitous': return 'bg-violet-50 text-violet-600 border-violet-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div 
      className={`relative bg-white rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between h-full ${
        isAdded
          ? 'border-2 border-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.35)] scale-[1.02]'
          : 'border border-gray-100 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-50/50'
      }`}
    >
      {/* Fairy Glow Magical Aura Effect */}
      {isAdded && (
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-2xl blur-lg opacity-40 -z-10 animate-pulse"></div>
      )}

      <div>
        <div className="flex items-start justify-between mb-5">
          <div className="w-14 h-14 rounded-xl bg-gray-50/80 flex items-center justify-center p-2.5 border border-gray-100 shadow-sm shrink-0">
            {imageSrc && !imgError ? (
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-contain drop-shadow-sm"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-2xl font-black text-gray-400 uppercase tracking-tighter">
                {name?.charAt(0)}
              </span>
            )}
          </div>

          {badge && (
            <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border uppercase tracking-wider ${getBadgeStyles(badge)}`}>
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2.5 tracking-tight">
          {name}
        </h3>

        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed min-h-[40px] font-medium">
          {description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between text-xs mb-5 pt-5 border-t border-gray-100/80">
          <span className="font-semibold bg-gray-100/80 px-3 py-1.5 rounded-md text-gray-600 border border-gray-200/50">
            {category}
          </span>
          <span className="font-medium text-gray-500 flex items-center gap-1">
            {difficulty}
          </span>
          {rating && (
            <span className="flex items-center gap-1.5 font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-md">
              ⭐ {rating}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAdd && onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
            isAdded
              ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg shadow-pink-200/50 cursor-default'
              : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'
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
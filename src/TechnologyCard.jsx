import React from 'react';

const TechnologyCard = ({ tech, onAdd, isAdded }) => {
  const name = tech?.name || tech?.title || 'Technology';
  const category = tech?.category || tech?.type || 'General';
  const description =
    tech?.description ||
    tech?.desc ||
    'A powerful technology for building modern applications.';
  const difficulty = tech?.difficulty || tech?.level || 'Beginner-Friendly';

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

  const rating =
    ratings[normalizedName] ||
    tech?.rating ||
    tech?.score ||
    '4.9';

  const badge =
    normalizedName === 'javascript'
      ? 'Ubiquitous'
      : tech?.badge || tech?.tag || '';

  const getImageSrc = () => {
    if (tech?.image) return tech.image;
    if (tech?.icon) return tech.icon;
    if (tech?.logo) return tech.logo;

    const formattedName = name.toLowerCase().replace(/[\s.]+/g, '');

    if (formattedName.includes('next')) return '/nextjs.png';
    if (formattedName.includes('svelte')) return '/svelte.png';

    return '';
  };

  const imageSrc = getImageSrc();

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100 overflow-hidden shrink-0">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';

                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'block';
                  }
                }}
              />
            ) : null}

            <span
              className="text-xl font-bold text-gray-700"
              style={{
                display: imageSrc ? 'none' : 'block',
              }}
            >
              {name?.charAt(0)}
            </span>
          </div>

          {badge && (
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                badge.toLowerCase() === 'popular'
                  ? 'bg-sky-50 text-sky-600 border border-sky-100'
                  : badge.toLowerCase() === 'versatile'
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                  : badge.toLowerCase() === 'essential'
                  ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                  : badge.toLowerCase() === 'modern'
                  ? 'bg-cyan-50 text-cyan-600 border border-cyan-100'
                  : badge.toLowerCase() === 'cache'
                  ? 'bg-rose-50 text-rose-600 border border-rose-100'
                  : badge.toLowerCase() === 'fast'
                  ? 'bg-amber-50 text-amber-600 border border-amber-100'
                  : badge.toLowerCase() === 'robust'
                  ? 'bg-teal-50 text-teal-600 border border-teal-100'
                  : badge.toLowerCase() === 'ubiquitous'
                  ? 'bg-violet-50 text-violet-600 border border-violet-100'
                  : 'bg-gray-50 text-gray-600 border border-gray-100'
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>

        <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed min-h-[40px]">
          {description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-4 border-t border-gray-50">
          <span className="font-medium bg-gray-100 px-2.5 py-1 rounded-md text-gray-700">
            {category}
          </span>

          <span className="font-medium text-gray-600">
            {difficulty}
          </span>

          {rating && (
            <span className="flex items-center gap-1 font-semibold text-amber-500">
              ⭐ {rating}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAdd && onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all shadow-sm ${
            isAdded
              ? 'bg-emerald-500 text-white cursor-not-allowed opacity-90'
              : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-black hover:to-gray-900 active:scale-[0.98]'
          }`}
        >
          {isAdded ? 'Added to Stack ✓' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
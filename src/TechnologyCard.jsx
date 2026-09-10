import React from 'react';

const TechnologyCard = ({ tech, onAddStock, isAdded }) => {
  const { name, category, description, difficulty, rating, image, badge } = tech;

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Header: Image/Icon and Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-contain" />
            ) : (
              <span className="text-xl font-bold text-gray-700">{name?.charAt(0)}</span>
            )}
          </div>
          {badge && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div>
        {/* Meta Info: Category, Difficulty, Rating */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-4 border-t border-gray-50">
          <span className="font-medium bg-gray-100 px-2.5 py-1 rounded-md text-gray-700">{category}</span>
          <span className="font-medium">{difficulty}</span>
          {rating && (
            <span className="flex items-center gap-1 font-semibold text-amber-500">
              ⭐ {rating}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAddStock && onAddStock(tech)}
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
import React from 'react';

const TechnologyCard = ({ tech, onAdd, isAdded }) => {
  const { name, image, category, description, difficulty } = tech;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
      <figure className="px-6 pt-6">
        <img src={image} alt={name} className="w-16 h-16 object-contain" />
      </figure>
      <div className="card-body items-center text-center p-6">
        <span className="badge badge-outline text-xs uppercase tracking-wider mb-2">{category}</span>
        <h2 className="card-title text-lg font-bold">{name}</h2>
        <p className="text-gray-500 text-sm line-clamp-2 my-2">{description}</p>
        <div className="text-xs font-semibold text-gray-400 mb-4">Difficulty: {difficulty}</div>
        <div className="card-actions w-full">
          <button
            onClick={() => onAdd(tech)}
            disabled={isAdded}
            className={`btn w-full btn-sm rounded-full ${
              isAdded 
                ? 'btn-disabled bg-gray-200 text-gray-400 border-none' 
                : 'bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none'
            }`}
          >
            {isAdded ? 'Added to Stack' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
import React from 'react';

const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-base-200 p-6 rounded-2xl shadow-sm border border-base-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Stack</h2>
        <span className="badge badge-primary">{stack.length}</span>
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <p className="text-sm">No technologies added to your stack yet.</p>
          <p className="text-xs mt-1 text-gray-400">Click "Add to Stack" on any card to begin building.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {stack.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between bg-base-100 p-3 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
                  <div>
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <span className="text-xs text-gray-400 uppercase">{item.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-700 p-1 text-sm font-bold"
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="btn btn-outline btn-error btn-sm w-full rounded-full mt-4"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
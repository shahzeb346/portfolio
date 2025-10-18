
import React, { useState } from 'react';

export default function Services({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id="services"
      className="flex justify-center items-center p-4 sm:p-6 md:p-8 mb-6 sm:mb-0"
    >
      <div className="w-72 sm:w-80 md:w-96 transition-transform duration-300 transform hover:scale-105">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden h-full flex flex-col justify-between">
          
          {/* Top Toolbar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-200">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          </div>

          {/* Service Content */}
          <div className="p-4 sm:p-6 flex flex-col h-full">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 text-center sm:text-left">
              {data.title}
            </h3>

            <p
              className={`text-gray-600 leading-relaxed text-sm sm:text-base ${
                expanded ? '' : 'line-clamp-4'
              }`}
            >
              {data.description}
            </p>

            {/* Read More Button */}
            {data.description.length > 150 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-indigo-600 mt-4 text-sm font-medium hover:underline self-start"
              >
                {expanded ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


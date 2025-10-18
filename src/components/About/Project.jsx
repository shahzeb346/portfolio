

export default function Project({ list }) {

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-5 flex flex-col border border-transparent hover:border-blue-300" id="projects">
      
      {/* Image */}
      <div className="mb-4 overflow-hidden rounded-md">
        <img
          src={list.img}
          alt={list.head}
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{list.head}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">{list.desp}</p>

      {/* Tech Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">HTML</span>
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">Css</span>
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">Javascript</span>
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">React</span>
      </div>

      {/* Button */}
      <a href={list.github} target="_blank" className="mt-auto inline-flex items-center justify-center w-full h-10 px-4 py-2 border border-blue-500 text-blue-400 font-medium text-sm rounded-md transition-colors duration-300 hover:bg-blue-500/10 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
        View Project
      </a>
    </div>
     
  );
}





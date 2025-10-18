
export default function Skill({ user }) {
  return (
    
      <div id="skill" className="h-[80v]">
       <div className="flex w-36 flex-col items-center gap-2.5 p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 skill-box">
      <img src={user.img} alt={user.title} className="w-16 h-16 object-contain" />
      <h4 className="text-white text-lg font-medium">{user.title}</h4>
    </div>
    </div>
    
   
  );
}





import img1 from '../../assets/about.jpg'

export default function About() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8" id="about">
      <h1 className="text-3xl py-6 sm:text-4xl font-bold text-center mb-8 text-gray-800">
        About Me
      </h1>
      
      <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-8 max-w-6xl mx-auto">
        
        {/* Text Section */}
        <section className="md:w-[50%] text-gray-700 text-lg leading-relaxed">
        <div>
          <h2 className='font-bold text-3xl'>A bit about me</h2>
          <p className=' py-3.5 '>
            I'm <span className="font-semibold text-blue-600">Shahzeb Khan</span>, a passionate Frontend Web Developer with a strong
            foundation in HTML, CSS, JavaScript, React, and Tailwind CSS.
            I specialize in crafting clean, responsive,
            and user-friendly web interfaces that not only look great but 
            perform seamlessly across devices. With a keen eye for design 
            and a deep understanding of modern UI/UX principles,
            I aim to bring ideas to life through code. 
          </p>
          <p >
            Whether it's
            building dynamic single-page applications with React or
            designing sleek layouts with Tailwind, I take pride in
            writing efficient, maintainable code and continuously 
            improving my skills to stay ahead in the fast-paced world of
            web development.
          </p>
          
        </div>
        <div class="mt-8 flex flex-wrap gap-3"><span class="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">Problem Solver</span>
        <span class="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">Creative Thinker</span>
        <span class="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">Team Player</span>
        <span class="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">Detail Oriented</span></div>
          
        </section>

        {/* Image Section */}
        <div className="md:w-[50%]">
          <img
            src={img1}
            alt="About"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </div>
  );
}

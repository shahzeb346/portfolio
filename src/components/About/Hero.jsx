
import img1 from '../../assets/webdev.svg'
import img2 from '../../assets/image2.png'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Banner() {
  return (
    <div id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gray-50 min-h-[80vh]">
        {/* Left section - text */}
        <section className="w-full md:w-1/2 space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold mt-6 text-gray-800">
            Hello, I'm Shahzeb Khan
          </h1>

          <p className="text-gray-600 text-lg">
            A Frontend Developer building <br className="hidden md:block" /> clean & responsive UIs.
          </p>

          <div className="flex items-center">
            <a href="#projects">
            <button className="bg-transparent border-2 text-2xl text-black px-5 py-2 rounded hover:bg-indigo-700 transition duration-300">
              View Work
            </button></a>
            <a href="#contact">
              <button className="bg-indigo-600 text-white text-2xl ml-6 px-5 py-3 rounded hover:bg-indigo-700 transition duration-300">
                Contact Me
              </button>
            </a>
          </div>

          <div className="flex gap-4 text-3xl text-gray-600 mt-4">
            <a href="https://www.linkedin.com/in/shah-zeb-27556a320/">
              <FaLinkedin className="hover:text-indigo-600 cursor-pointer" />
            </a>
            <a href="https://github.com/shahzeb346">
              <FaGithub className="hover:text-indigo-600 cursor-pointer" />
            </a>
            <a href=""></a>
          </div>
        </section>

        {/* Right section - image with motion */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <img
            src={img1}
            alt="Profile"
            className="w-100 md:w-96 h-100 rounded-[50%] shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </div>

  )
}

export default Banner;


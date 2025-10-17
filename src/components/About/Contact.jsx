 import {FaLinkedin,FaGithub,FaEnvelope} from 'react-icons/fa';
 import { FaLocationDot } from "react-icons/fa6";
export default function Contact() {
  return (
    <div className="bg-gray-100 py-12 px-4" id="contact">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600">Contact</h1>
        <h5 className="text-lg text-gray-700 mt-2">Connect with me</h5>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          If you want to know more about me or would like to view my work, feel free to send a message or click the email.
        </p>
      </div>

      {/* Form and Info Section */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <form action="#" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 resize-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Or send message on email <span className="text-indigo-600 font-semibold">zeb84250@gmail.com</span>
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full lg:max-w-sm">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Contact Information</h3>
          <div className="mb-4">
              <FaEnvelope className="text-3xl hover:text-indigo-600 cursor-pointer" />
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="text-gray-700">zeb84250@gmail.com</p>
          </div>
          <div className="mb-4">
            
               <FaLocationDot className="text-3xl hover:text-indigo-600 cursor-pointer"/>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <p className="text-gray-700">District Mohmand, Peshawar, Pakistan</p>
          </div>
          <div className=''>
            
            <p className="text-sm font-medium text-gray-700">Social</p>
            <div className='flex gap-6 text-3xl mt-6'>
              <a href="https://www.linkedin.com/in/shah-zeb-27556a320/" target='_blank'><FaLinkedin className="hover:text-indigo-600 cursor-pointer" /></a>
              <a href="https://github.com/shahzeb346" target='_blank'> <FaGithub className="hover:text-indigo-600 cursor-pointer" /></a>
           
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

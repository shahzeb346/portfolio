
 import './App.css'
 import './index.css'
import  Banner from './components/About/Hero.jsx'
import Navbar from './components/About/Navbar.jsx'
import About from './components/About/About.jsx'
import Skill from './components/About/Skills.jsx'
import Project from './components/About/Project.jsx'
import Services from './components/About/Services.jsx'
import Contact from './components/About/Contact.jsx'
import Footer from './components/About/Footer.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import imga from './assets/buger2.png';
import imgb from './assets/2755436.jpg';
import imgc from './assets/calculator.jpg';
import imgd from './assets/pasword.jpeg';
import imge from './assets/todo.jpg';
import imgf from './assets/university.jpg';
import imgg from './assets/weather.webp';


import img1 from './assets/html.png';
import img2 from './assets/css.png';
import img3 from './assets/js.png';
import img4 from './assets/react.png';
import img5 from './assets/download (1).svg';
import img6 from './assets/bootstrap.svg'
import img7 from './assets/mongodb.svg'
import img8 from './assets/express.jpeg'
import img9 from './assets/github.png';

const skills = [
  { img: img1, title: 'HTML' },
  { img: img2, title: 'CSS' },
  { img: img3, title: 'JavaScript' },
  { img: img4, title: 'React' },
  { img: img5, title: 'Tailwind CSS' },
  { img: img6, title: 'Bootstrap'},
  { img: img7, title: 'mongodb'},
  { img: img8, title: 'Express'},
  { img: img9, title: 'GitHub' },

];


const UserService=[
        {
          id: 1,
          title: "Front End Development",
          description: "I build responsive, user-friendly websites using modern technologies like HTML, CSS, JavaScript and frameworks like React—ensuring seamless performance across all devices."
        },
        {
          id: 2,
          title: "Back End Development",
          description: "Powering the core of modern applications, backend development focuses on building secure, scalable, and high-performance server-side systems. From API integrations to database architecture and authentication, this showcase highlights robust solutions crafted to ensure seamless functionality behind the scenes"
        },
        {
          id: 3,
          title: "Full Stack Development",
          description: "Building dynamic, end-to-end web applications using Node.js and Express.js. From crafting responsive frontends to developing efficient RESTful APIs and managing databases, this work demonstrates seamless integration across the entire tech stack."
        },
       
      ]

      const userSkill =[
        {
          img: img1,
          title: "HTML"
        },
        {
          img: img2,
          title: "CSS"
        },
        {
          img: img3,
          title: "Javascript"
        },
        {
          img: img4,
          title: "React"
        },
        {
          img: img6,
          title: "Tailwind"
        },
        {
          img: img5,
          title: "Github"
        }
      ]

      
      const Projectuser =[
    {
        img: imga,
        head: "resturant website landing page",
        desp: "A modern and elegant restaurant landing page built with JavaScript, a touch of React, and styled beautifully using Tailwind CSS. Designed to deliver a smooth, responsive user experience with a visually appetizing layout that captures the essence of fine dining.",
        github: "https://shahzeb346.github.io/website-landing-page/",
    },
    {
        img: imgb,
        head: "Login Form",
        desp: "A sleek and modern login form built with clean UI design and smooth user experience in mind. This responsive form includes input validation, password visibility toggle, and intuitive error handling—perfect for web applications seeking a professional, user-friendly authentication interface.",
        github: "https://shahzeb346.github.io/login-form/",
    },
    {
        img: imgc,
        head: "Calculator",
        desp: "A clean and interactive calculator designed for simplicity and accuracy. This responsive tool handles basic arithmetic operations with a smooth interface, intuitive button layout, and real-time result display—ideal for both desktop and mobile users.",
        github: "https://shahzeb346.github.io/calculater-app/",
    },
    {
        img: imgd,
        head: "Password Generater",
        desp: "A secure and customizable password generator that creates strong, random passwords in a single click. With options for length, symbols, numbers, and case sensitivity, this intuitive tool ensures safe and reliable password creation for any use case.",
        github: "https://shahzeb346.github.io/password-generater/",
    },
    {
        img: imge,
        head: "To-Do App",
        desp: "A simple yet powerful to-do app designed to boost productivity. Featuring task creation, editing, deletion, and real-time status updates, this clean and responsive interface helps users stay organized and focused throughout the day.",
        github: "https://shahzeb346.github.io/to-do-app/",
    },
    {
        img: imgf,
        head: " My Fisrt Html Css Practice project",
        desp: "A well-structured and visually appealing website built using HTML and CSS, showcasing responsive design principles, semantic markup, and clean styling. Created as part of a university project to demonstrate front-end development fundamentals.",
        github: " https://shahzeb346.github.io/html-css-project/",
    },

    {
       img: imgg,
       head: "weather App",
       desp: "A simple and interactive Weather App that provides real-time weather updates for any city around the world. 🌍Built with HTML, CSS, and JavaScript, this app uses the OpenWeatherMap API to display accurate weather data such as temperature, humidity, wind speed, and weather conditions with relevant icons.",
       github:"https://shahzeb346.github.io/weather-app/",
    }
    

]




function App() {
  return (
    
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <div className="h-[100vh]  py-6 px-6 sm:px-6 lg:px-8" id="skills">
      <h2 className="text-3xl py-6 sm:text-4xl font-bold text-center mb-10 mt-20 text-gray-800" >
        Technologies and Tools
      </h2>
      <div  className="flex flex-wrap gap-4 justify-center items-center mt-20" >
        {skills.map((skill, index) => (
          <Skill key={index} user={skill} />
        ))}
      </div>
    </div>

    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50" id='projects'>
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-10">Projects</h2>
  
  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {
      Projectuser.map((Data) => (
        <Project key={Data.id} list={Data} />
      ))
    }
  </div>
</div>

    
     

<div className="bg-indigo-500 py-12 px-4 h-[100vh]" id='services'>
  <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 mt-15 tracking-wide">
    My Services
  </h2>

  
  <div className="flex flex-wrap justify-center items-center mt-[100px] gap-6">
    {UserService.map((service, index) => (
      <Services key={index} data={service} />
    ))}
  </div>
</div>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App




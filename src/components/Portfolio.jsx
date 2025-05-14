import {  useState } from 'react'
import TodoList from '../assets/TodoList.png'
import { LiaCertificateSolid } from "react-icons/lia";
import FullStackCertificate from '../assets/full-stack.png'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/javascript.svg'
import nodejs from '../assets/nodejs.svg'
import tailwind from '../assets/tailwind.svg'
import reactjs from '../assets/reactjs.svg'
function Portfolio() {
  const [projects, setProject] = useState([
    {
      image: TodoList,
      title: 'Todo List',
      description: 'Effortlessly manage tasks: add, delete, complete. Instantly see summaries for all, completed, and pending items.',
      demo:'https://react-todo-list-beta-sable.vercel.app/'
    }, 
    {
      image: TodoList,
      title: 'Todo List',
      description: 'Effortlessly manage tasks: add, delete, complete. Instantly see summaries for all, completed, and pending items.',
      demo:'https://react-todo-list-beta-sable.vercel.app/'
    }, 
    {
      image: TodoList,
      title: 'Todo List',
      description: 'Effortlessly manage tasks: add, delete, complete. Instantly see summaries for all, completed, and pending items.',
      demo:'https://react-todo-list-beta-sable.vercel.app/'
    }, 
    {
      image: TodoList,
      title: 'Todo List',
      description: 'Effortlessly manage tasks: add, delete, complete. Instantly see summaries for all, completed, and pending items.',
      demo:'https://react-todo-list-beta-sable.vercel.app/'
    }, 

  ])
  const [techStack, setTechStack] = useState([
    {
      image: html,
      name: "HTML"
    },
    {
      image: css,
      name: "CSS"
    },
    {
      image: js,
      name: "JavaScript"
    },
    {
      image: tailwind,
      name: "Tailwind CSS"
    },
    {
      image: nodejs,
      name: "Node JS"
    },
    {
      image: reactjs,
      name: "React"
    }
  ])
   const [activeTab, setActiveTab] = useState("Project")
   const [cardView, setCardView] = useState(2)

  return (
    <div className=' w-full min-h-screen bg-[#030014] text-center mt-10 pt-10'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-500 sm:text-6xl text-3xl font-semibold transition-all ease duration-700'>Portfolio Showcase</h1>
      <div className="main">

     <div className="portfolioHeader max-w-7xl lg:w-full md:w-3xl py-2 sm:px-8 px-2 mx-2 sm:mx-auto flex h-25 items-center sm:gap-10 border rounded-xl bg-gray-800/50 mt-10 transition-all ease duration-300">
      {["Project","Certificate","Tech Stack"].map((tabIndex) => (
        <div
          key={tabIndex}
          onClick={() => setActiveTab(tabIndex)}
          className={`switcherTab w-full h-full rounded-lg transition-all ease duration-300 cursor-pointer hover:bg-[#1976d2]/10 flex justify-center items-center
            ${activeTab === tabIndex ? 'bg-slate-800 backdrop-brightness-200 text-white' : 'text-gray-300'}
          `}
        >
          <h1>{tabIndex}</h1>
        </div>
      ))}
    </div>
        <div className='CardSection'>
        <div className={`projects grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2  gap-5 border-1   p-5 max-w-7xl w-full mx-auto mt-10 justify-center  transition-all ease duration-500 ${activeTab === 'Project'? '':'hidden' } `}>
          {projects.map((project, idx) => (
            <div key={idx} className={`project p-5 max-w-96 mx-auto md:mx-0  rounded-2xl text-white max-h-[500px] h-full text-start bg-gray-800/50  border border-white/10 hover:scale-102 transition-all ease duration-300 ${idx > cardView ? 'hidden':''}`}>
              <div className="projectImg rounded-xl w-full h-30 bg-red-400 overflow-hidden mb-10 ">
                <img className='object-cover hover:scale-110 transition-all ease duration-300 w-full h-full' src={project.image} alt={`image${idx + 1}`} />
              </div>
              <h1 className='text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2'>{project.title}</h1>
              <p className='text-gray-300/80 text-sm leading-relaxed mb-4 text-wrap'>{project.description}</p>
              <div className="Project-buttons flex items-center justify-between w-full mt-10">
                <button className='text-sm font-semibold text-blue-400 cursor-pointer'>
                  <a href={project.demo}>Live Demo</a></button>
                <button className='text-white/90 bg-white/10 rounded py-2 px-4 hover:scale-102 transition-all ease duration-300 hover:bg-white/20'>Details</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`Certificates projects grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2  gap-5 border-1   p-5 max-w-7xl w-full mx-auto mt-10 justify-center  transition-all ease duration-500 ${activeTab === "Certificate"? '':'hidden'}`}>
          <div className="Certificate-image border-[20px] border-[#141E38]  rounded-lg max-w-96 hover:scale-105 transition-transform duration-300">
            <img   src={FullStackCertificate} alt="" />
          </div>
          <div className="Certificate-image border-[20px] border-[#141E38]  rounded-lg max-w-96 hover:scale-105 transition-transform duration-300">
            <img   src={FullStackCertificate} alt="" />
          </div>
          <div className="Certificate-image border-[20px] border-[#141E38]  rounded-lg max-w-96 hover:scale-105 transition-transform duration-300">
            <img   src={FullStackCertificate} alt="" />
          </div>
        </div>

        <div className={`TechStack max-w-7xl p-5 w-full mx-auto mt-10 sm:flex sm:flex-wrap justify-center grid grid-cols-2 gap-5 ${activeTab === "Tech Stack"? '':'hidden'}`}>
          {techStack.map((elem,idx) =>(
            <div key={idx} className={`techStack sm:w-40 sm:h-45 w-35 h-40 rounded-lg flex flex-col bg-slate-800/50 items-center gap-4 hover:scale-105  transition-transform duration-300 justify-center mx-auto ${activeTab === "Tech Stack"? '':'hidden'}`}>
              <img width={70} src={elem.image} alt={elem.name} />
              <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>{elem.name}</h1>
            </div>
          ))}
        </div>

          <button onClick={() => (cardView == 2 ? setCardView(10):setCardView(2))} className='text-white py-2 px-4  mb-5 bg-white/10 w-30 hover:bg-white/20 hover:cursor-pointer rounded-lg'>{cardView == 2 ? "View More":"View less"}</button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

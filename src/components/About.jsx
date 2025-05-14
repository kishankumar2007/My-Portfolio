import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { LiaCertificateSolid } from "react-icons/lia";
import { GoArrowUpRight } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function About() {
  const Cards = [
    {logo: "<>",
      number:2,
      title:"TOTAL PROJECT",
      subtitle: "Innovative web & mobile solutions crafted"
    },
    {logo: <LiaCertificateSolid />,
      number:1,
      title:"CERTIFICATES",
      subtitle: "Professional Skill Validated"
    },
    {logo: <TfiWorld />,
      number:1,
      title:"YEARS OF EXPERIENCE",
      subtitle: "Continuous learning journey"
    }]
  return (
    <div className='about w-full min-h-screen bg-[#030014] text-center mt-15 pt-20'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-500 sm:text-6xl text-3xl font-semibold transition-all ease duration-700'>About Me</h1>
      <p className='text-[#e2d3fd] max-w-3xl w-full mx-auto mt-5 sm:text-xl px-3'>Hello, I'm <span className='text-white'>Kishan Kumar</span> passionate about building smart and scalable web applications. I've completed a front end development course and constantly explore new technologies to refine my skills. Focused on continuous learning, I aim to transition into the IT industry by 2027 and eventually move towards AI.</p>
      <div className="buttons mt-10 mx-auto flex flex-wrap max-w-96 justify-center gap-2">
        <button onClick={()=>('')} className='text-white bg-linear-to-r from-violet-700 to-purple-600 py-3 px-5 rounded-md cursor-pointer hover:scale-105 flex items-center gap-2 '><IoDocumentTextOutline /> Download CV</button>
      <Link to='/portfolio'>  <button className='text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-violet-500 py-3 px-5 font-light bg-white/5 border border-purple-600 rounded-md sm:ml-4 cursor-pointer hover:scale-105'>{`<>`}View Project</button> </Link>
      </div>
      <div className="card flex items-center flex-wrap justify-center mt-15 text-white">
           {Cards.map((card,idx)=>((
           <Link to='/portfolio' key={idx}   className='card  bg-white/10 max-w-80 w-full p-5  mx-5 rounded-xl text-start opacity-80 hover:bg-white/15 hover:scale-105 transition-all ease duration-300 mt-4'>
              <div className="topsection flex w-full justify-between items-center">
                <div className="logo text-2xl bg-white/10 p-3 rounded-full text-white">{card.logo}</div>
                <h1 className='text-4xl font-bold opacity-100'>{card.number}</h1>
              </div>
              <h1 className='text-lg font-light mt-3'>{card.title}</h1>
              <div className="bottom flex w-full justify-between">
              <h2 className='text-xs font-extralight mt-1'>{card.subtitle}</h2>
               <GoArrowUpRight />
              </div>
            </Link>
           )))}
      </div>

    </div>
  )
}

export default About

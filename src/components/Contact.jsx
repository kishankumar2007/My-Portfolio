import React from 'react'
import { GrContact } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <div className=' w-full min-h-screen bg-[#030014] text-center mt-10 pt-10'>

      <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-500 sm:text-6xl text-3xl font-semibold transition-all ease duration-700'>Contact Me</h1>

      <h1 className='text-white/50 text-md m-4 mx-3'>Got a question? Send me a message, and I'll get back to you soon.</h1>


      <div className="outerdiv sm:w-full bg-white/5 backdrop-blur-md border border-white/20 shadow-lg max-w-xl py-3 sm:px-15 px-3 w-[95%] mx-auto rounded-xl flex flex-col gap-4 mt-20 items-center">

        <div className="innerdiv w-full h-full bg-white/10 rounded-xl backdrop-blur-md border border-white/20 shadow-lg text-white/50">
          <div className="heading flex w-full px-5 justify-between py-5">
            <h1 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-600'>Get in Touch</h1>
            <h1 className='text-3xl text-violet-500/70'> <GrContact /> </h1>
          </div>

          <h1 className='mx-1'>Have something to discuss? Send me a message and let's talk.</h1>

          <div className="inputfield flex flex-col items-center w-full sm:px-8 px-2 gap-5 mt-5">
            <div className="input-div bg-white/10 rounded w-full border py-4 border-white/20 outline-purple-600 flex px-5">
              <IoIosContact size={20} />
              <input className='text-white w-full ml-5 outline-none' type="text" placeholder='Your Name' name='name' />
            </div>

            <div className="input-div bg-white/10 rounded w-full border py-4 border-white/20 outline-purple-600 flex px-5">
              <MdOutlineMail size={20} />
              <input className='  text-white w-full ml-5 outline-none' type="email" placeholder='Your Email' name='name' />
            </div>

            <div className="input-div bg-white/10 rounded w-full border py-4 border-white/20 outline-purple-600 flex px-5">
              <GrContact size={20} />
              <textarea className='w-full max-h-45 min-h-45  ml-4 border-none text-white outline-none' name="message" placeholder="Your Message"></textarea>
            </div>

            <button className='w-full py-2 bg-gradient-to-r text-lg flex items-center justify-center gap-2 from-violet-500 to-purple-600 mb-5 rounded-lg text-white hover:scale-105 transition-transform duration-300'> <FaTelegramPlane/> Send Message</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

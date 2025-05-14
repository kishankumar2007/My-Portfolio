import HomeVideo from "../assets/HomeVideo.gif";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const Tech = ["React", "Javascript", "Node.Js", "Python"];
function Home() {
  return (
    <div className="home md:grid md:grid-cols-2 w-full min-h-[100vh] bg-[#030014] mt-15 flex  flex-col-reverse sm:gap-5  lg:py-10 justify-between">
      <div className="left-side flex flex-col lg:pl-20 sm:pl-5">
        <div className=" flex flex-col gap-6 w-full shrink-0">
          <div className="stream mt-10">
            <h1 className="sm:text-7xl text-6xl  font-bold text-white sm:pl-0 pl-2">
              Front End
            </h1>
            <h1 className="sm:text-7xl text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-950 sm:pl-0 pl-2 ">
              Developer
            </h1>
          </div>
          <h1 className="text-white text-2xl pl-2">
            Computer Science & Engg. Student
          </h1>
          <h1 className="text-xl text-[#e2d3fd] shrink-0 pl-2">
            Enhancing digital experiences that are smooth, scalable, and made to
            impress.
          </h1>
          <div className="flex gap-3">
            {" "}
            {Tech.map((elem,idx) => (
              <h1 key={idx}  className="py-2 px-4 hidden sm:block bg-white/5 border border-white/10 backdrop-blur-sm text-[#e2d3fd] rounded-full font-light">
                {elem}
              </h1>
            ))}
          </div>
          <div className="button flex sm:gap-10 gap-5 pl-2">
           <Link to='/portfolio'> <button className="text-white py-2  px-10 rounded hover:scale-105 transition-transform duration-300 border border-white/10 shadow bg-transparent shadow-violet-500">
              Projects
            </button>
              </Link>
           <Link to='/contact'><button className="text-white py-2 px-10 rounded hover:scale-105 transition-transform duration-300  border border-white/10 shadow bg-transparent shadow-violet-500">
              Contact
            </button>
            </Link> 
          </div>
          <div className="socal flex justify-between px-10 text-2xl items-center h-30 w-70">
            <a  className="border-2 p-4 rounded-full hover:bg-white/10 border-white/5 transition-transform duration-300" href="https://github.com/mrperfectvip">
              <FaGithub color="white" size={20} />
            </a>
            <a className="border-2 p-4 rounded-full hover:bg-white/10 border-white/5 transition-transform duration-300" href="#">
              <FiLinkedin color="white" size={20} />
            </a>
            <a className="border-2 p-4 rounded-full hover:bg-white/10 border-white/5 transition-transform duration-300" href="https://instagram.com/kishan_kk_">
              <BsInstagram color="white" size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="right-side sm:rounded-lg shadow flex items-center justify-center  overflow-hidden ">
        <img src={HomeVideo} alt="HomeVideo" />
      </div>
    </div>
  );
}

export default Home;

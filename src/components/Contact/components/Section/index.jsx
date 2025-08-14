import { SecondaryBtn,Heading } from "../../../generalComponents"
import blogImg from "../../../../assets/images/project.png"
import { SiGmail } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";


function Section() {
    return (
        <div className="px-2 md:px-8 pt-10 pb-14 space-y-8">
      <Heading preFix='Contact ' postFix='Links'/>
           
            
           <div className="pt-5 inline-grid grid-cols-2 grid-rows-2 gap-x-8 " >
            <div className="  ">
<a  href="https://mail.google.com/mail/?view=cm&fs=1&to=iqra44938@gmail.com" 
  target="_blank"
  rel="noopener noreferrer">

              <SiGmail className=" text-5xl md:text-7xl text-primary "/>
              </a>
            </div>
            <div className="">
              <a href="https://www.linkedin.com/in/iqra-khaliq/" target="_blank" rel="noopener noreferrer">

              <IoLogoLinkedin className=" text-5xl md:text-7xl text-primary"/>
              </a>
            </div>
            <div className="flex  ">
              <a href="https://github.com/Iqra562" target="_blank" rel="noopener noreferrer">
              <BsGithub className=" text-5xl md:text-7xl text-primary"/>
              </a>
            </div>
           
           </div>
      
        </div>
    )
}

export { Section }
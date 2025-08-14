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
              <SiGmail className=" text-5xl md:text-7xl text-primary "/>
            </div>
            <div className="">
              <IoLogoLinkedin className=" text-5xl md:text-7xl text-primary"/>
            </div>
            <div className="flex  ">
              <BsGithub className=" text-5xl md:text-7xl text-primary"/>
            </div>
           
           </div>
      
        </div>
    )
}

export { Section }
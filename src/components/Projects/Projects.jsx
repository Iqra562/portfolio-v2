import { IoHomeOutline } from "react-icons/io5";
import { IoIosDoneAll } from "react-icons/io";
import {SecondaryBtn, TitleButton} from "../generalComponents";
import { IoIosSend } from "react-icons/io";
import { Section } from "./components";
import { FaDiagramProject } from "react-icons/fa6";
import { icons } from "../../utilities/icons/Icons";

function Projects(){
  const Projects =  icons.project
 return(
   <div className="bg-primaryDark px-4 md:px-10 py-4 rounded-2xl w-full">

      <TitleButton icon={Projects} title='Projects'/>
      <div className="">
    <Section/>
      </div>
      </div>
 )
}

export  {Projects};
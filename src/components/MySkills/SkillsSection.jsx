import { IoHomeOutline } from "react-icons/io5";
import { IoIosDoneAll } from "react-icons/io";
import {SecondaryBtn, TitleButton} from "../generalComponents";
import { IoIosSend } from "react-icons/io";
import { SkillsCarousal } from "./components/SkillsCarousal";
import { Section } from "./components";
import { FaGraduationCap } from "react-icons/fa";
import { icons } from "../../utilities/icons/Icons";

function SkillsSection(){
  const Skills = icons.skills
 return(
   <div className="bg-primaryDark px-4 md:px-10 py-4  rounded-2xl w-full">

      <TitleButton icon={Skills} title='Skills'/>
      <div className="">
    <Section/>
      </div>
      </div>
 )
}

export  {SkillsSection};
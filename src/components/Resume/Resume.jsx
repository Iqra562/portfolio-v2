import { IoHomeOutline } from "react-icons/io5";
import { IoIosDoneAll } from "react-icons/io";
import {SecondaryBtn, TitleButton} from "../generalComponents";
import { IoIosSend } from "react-icons/io";
import { Section } from "./components";
import { SiReaddotcv } from "react-icons/si";
import { icons } from "../../utilities/icons/Icons";

function Resume(){
  const Resume  = icons.resume
 return(
   <div className="bg-primaryDark px-4 md:px-10 py-4 rounded-2xl w-full">

      <TitleButton icon={Resume} title='Resume'/>
      <div className="">
    <Section/>
    <Section/>
    <Section/>
    <Section/>
    <Section/>
      </div>
      </div>
 )
}

export  {Resume};
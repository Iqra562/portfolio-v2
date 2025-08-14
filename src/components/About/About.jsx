import { IoHomeOutline } from "react-icons/io5";
import {TitleButton} from "../generalComponents";
import { AboutSection } from "./components";
import { icons } from "../../utilities/icons/Icons";
function About(){
  const User = icons.user
 return(
   <div className="bg-primaryDark px-4 md:px-10 py-4 rounded-2xl w-full">

      <TitleButton icon={User} title='About Me'/>
      <div>

      <AboutSection/>
      </div>
      </div>
 )
}

export  {About};
import { IoHomeOutline } from "react-icons/io5";
import { IoIosDoneAll } from "react-icons/io";
import {SecondaryBtn} from "../generalComponents";
import { IoIosSend } from "react-icons/io";
import { IconsMarquee } from "./components";

function Introduction(){
 return(
   <div className="bg-primaryDark p-4 rounded-2xl w-full">
      <button className="border border-night-black py-2.5 px-6 rounded-full flex justify-center items-center space-x-2 hover:bg-neutral-900 hover:border-neutral-900 transition-all duration-300   animate-scaleOnce" > <IoHomeOutline className="text-secondary text-sm"/> <span className="uppercase text-primary text-sm font-normal ">Intro</span> </button>
      <div className="px-8 py-10 space-y-8">

   <div className="flex space-x-2">
<p className="text-white uppercase text-4xl font-semibold">I craft the </p>
<p className="text-secondary uppercase text-4xl font-semibold">web’s visual experience </p>

   </div>
   <p className="text-primary text-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam sint, iure voluptate ea porro at atque, veniam debitis deleniti asperiores amet adipisci nostrum. Dolore optio sapiente consectetur harum numquam.
   </p>
   <div className="flex justify-between">
      <div className="flex items-center space-x-2">
         <IoIosDoneAll className="text-xl text-secondary"/>  
         <span className="text-sm text-primary capitalize">Available for work</span>
      </div>
      <div className="flex items-center space-x-2">
         <IoIosDoneAll className="text-xl text-secondary"/>  
         <span className="text-sm text-primary capitalize">full time</span>
      </div>
      <div></div>

   </div>
<SecondaryBtn className="font-semibold py-5"text="Hire me" icon={IoIosSend} />
      <div className="flex">
  <div className="border-l-2 border-secondary font-semibold pl-2 pr-20">
   <p className="text-white text-sm">Trusted</p>
   <p className="text-white text-sm">Technologies</p>
  </div>
  <div className=" overflow-hidden">
      <IconsMarquee/>

  </div>
      </div>

   </div>
      </div>
 )
}

export  {Introduction};
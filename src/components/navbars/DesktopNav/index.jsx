import { useEffect, useState } from 'react';
import {icons} from '../../../utilities/icons/Icons'


const Home = icons.home;
const User = icons.user;
const Skills = icons.skills;
const Resume  = icons.resume;
const Project = icons.project;
const Mail = icons.mail


const sections = [
  { id: "home", label: "Section 1" },
  { id: "about", label: "Section 2" },
  { id: "skills", label: "Section 3" },
  { id: "resume", label: "Section 4" },
  { id: "projects", label: "Section 4" },
  { id: "contact", label: "Section 4" },
];



function DesktopNav(){
    const [activeId , setActiveId] = useState('')
   useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Trigger only when the top of the element hits the top of the viewport
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          console.log(entry.target.id)
        }
      });
    },
    {
      root: null,  //viewport       
      threshold: 0, //elements visibility
rootMargin: "0px 0px -90% 0px" //early trigger 

    }
  );

  sections.forEach((sec) => {
    const el = document.getElementById(sec.id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);


    return(
    <div className='inline-block w-fit h-fit border border-night-black rounded-full p-2  '>

   <div className='flex flex-col  gap-3'>
    <div className='text-white hover:text-secondary hover:bg-primaryDark p-1  rounded-full cursor-pointer ' >
  <button type='button' className='text-xl p-2'>

   <Home />
  </button> 
    </div>
    <div className='text-white hover:text-secondary hover:bg-primaryDark p-1  rounded-full cursor-pointer '>
  <button type='button' className='text-xl p-2'>

   <User />
  </button> 
    </div>
    <div className='text-white hover:text-secondary hover:bg-primaryDark p-1  rounded-full cursor-pointer '>
  <button type='button' className='text-xl p-2'>

   <Skills />
  </button>
    </div>
    <div className='text-white hover:text-secondary hover:bg-primaryDark p-1  rounded-full cursor-pointer '>
  <button type='button' className='text-xl p-2'>

   <Resume />
  </button>
    </div>
    <div className='text-white hover:text-secondary hover:bg-primaryDark p-1  rounded-full cursor-pointer '>
  <button type='button' className='text-xl p-2'>

   <Project />
  </button>
    </div>
    <div className='text-white hover:text-secondary hover:bg-primaryDark p-1  rounded-full cursor-pointer '>
  <button type='button' className='text-xl p-2'>

   <Mail />
  </button>
    </div>
   
   
    </div>
 
   </div> 
    )
}

export   {DesktopNav};
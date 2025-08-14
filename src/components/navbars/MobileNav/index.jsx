import { useEffect, useState } from 'react';
import {icons} from '../../../utilities/icons/Icons'
import { FiMenu, FiX } from "react-icons/fi";
import { TbMenuDeep } from "react-icons/tb";


const Home = icons.home;
const User = icons.user;
const Skills = icons.skills;
const Resume  = icons.resume;
const Project = icons.project;
const Mail = icons.mail


const menuItems = [
    { id: "home", label: "Home", Icon: Home },
    { id: "about", label: "About", Icon: User },
    { id: "skills", label: "Skills", Icon: Skills },
    { id: "resume", label: "Resume", Icon: Resume },
    { id: "projects", label: "Projects", Icon: Project },
    { id: "contact", label: "Contact", Icon: Mail },
  ];



function MobileNav(){
    const [activeId , setActiveId] = useState('')
   useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Trigger only when the top of the element hits the top of the viewport
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    },
    {
      root: null,  //viewport       
      threshold: 0, //elements visibility
rootMargin: "0px 0px -80% 0px" //early trigger 

    }
  );

  menuItems.forEach((sec) => {
    const el = document.getElementById(sec.id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

const handleScrollToActiveComponent = (targetId) => {
  setActiveId(targetId);
  const target = document.getElementById(targetId);
  

  const scrollOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  };

  target.style.scrollMarginTop = '80px';
  
  target.scrollIntoView(scrollOptions);
  
  
};

 
const MobileNavbar=() =>{
  const [open, setOpen] = useState(false);
  
 return (
    <nav className=" text-white p-4 relative w-full ">
       
      <div className="flex items-end justify-end  ">
        

        <button onClick={() => setOpen(!open)} className="text-primary text-2xl ml-0">
          <TbMenuDeep />
        </button>
      </div>

      <div
        className={`absolute z-50 top-full left-0 w-full bg-primaryDark rounded-xl mt-3 shadow-md transform transition-all duration-300 origin-top ${
          open
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-start px-4 py-3 gap-3">
          {menuItems.map(({ id, label, Icon }) => (
            <li
              key={id}
              className="flex items-center gap-3 cursor-pointer group  w-full"
              onClick={() => handleScrollToActiveComponent(id)}
            >
              <div
                className={`p-1 rounded-full transition-colors ${
                  activeId === id
                    ? "bg-primaryDark text-secondary"
                    : "text-white group-hover:bg-primaryDark group-hover:text-secondary "
                }`}
              >
                <button type="button" className="text-xl p-2">
                  <Icon />
                </button>
              </div>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

    return(
    <div className='inline-block  bg-primaryDark/95 p-2  w-full  '>
 <MobileNavbar/>
   
 
   </div> 
    )
}

export   {MobileNav};
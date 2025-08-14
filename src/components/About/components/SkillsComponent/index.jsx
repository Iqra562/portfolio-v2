import {icons} from '../../../../utilities/icons/Icons'


const HTML = icons.html;
const CSS = icons.css;
const JS = icons.js;
const  React  =icons.reactjs;
const  MUI  =icons.mui;
const  Node  =icons.nodejs;
const MongoDb = icons.mongoose;
const Wordpress = icons.wordpress;


export const logos = [HTML, CSS,JS,React,MUI,Node,MongoDb,Wordpress];

export const SkillsComponent = () => {
  const skills = [
    {name:'HTML', expertise:"89%"},
    {name:'CSS', expertise:"89%"},
    {name:'javascript', expertise:"89%"},
    {name:'react js', expertise:"89%"},
    {name:'redux', expertise:"89%"},
    {name:'material UI', expertise:"89%"},
    {name:'API Integration', expertise:"89%"},
    {name:'tailwind css', expertise:"89%"},
  ]
  return (
    <div className='flex gap-x-4 gap-y-8 flex-wrap'>
{
  skills.map((skill,i)=>(
 <div className='bg-[#145d4c] hover:bg-primaryDark hover:border-secondary  inline px-4 md:px-6 py-3 border-[1px] border-dashed border-night-black   text-white text-xs md:text-sm capitalize font-bold rounded-full space-x-1  transition-all duration-300  cursor-pointer'>
    <span>{skill.name}</span>
    <span>{skill.expertise}</span>
   </div>
  ))
}

  
  
  
  
  
    </div>
  );
};

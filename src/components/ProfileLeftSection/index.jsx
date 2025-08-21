import {icons} from '../../utilities/icons/Icons'
import {SecondaryBtn} from '../generalComponents'
import { TypewriterEffect } from './components/TypewriterEffect';
// import cv from '../../assets/docs/Resume-Iqra.pdf'
import me from '../../assets/images/me.jpeg'

function ProfileLeftSection(){
    const GitHubIcon = icons.github;
    const LinkedinIcon = icons.linkedin;
    const DownlaodIcon = icons.download; 
 
return(
<div className="w-full">

   <div className="bg-primaryDark   overflow-hidden rounded-2xl w-full ">

    <div className="relative   ">

    <div className="absolute bg-[#18191A] h-12 w-28 z-2 p-2 right-0"></div>
    <div className="absolute bg-[#18191A] p-1 h-12 z-2 right-[5.1rem] -top-5 w-20 rotate-45"></div>
    </div>
 <div className=" pt-16 px-6">
    <div className="flex flex-col justify-center items-center ">

    <div className="w-[125px] h-[125px] rounded-full border-8 border-night-black overflow-hidden ">
         <img src={me} alt="" className='w-full'   style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", 
              objectPosition: "center center",
            //   borderRadius: "50%",
            }}/>
    </div>
    <h1 className="text-center text-white font-bold text-lg ">IQRA</h1>
     {/* <h2 className="text-secondary font-bold">Frontend Developer</h2> */}
     <TypewriterEffect/>
    <hr  className="border border-night-black w-full"/>
    </div>
    <div className="pt-1 space-y-3">
        <div className="flex items-center justify-between ">
            <span className="text-white uppercase text-sm font-bold">country</span>
            <p className="text-primary text-sm font-bold">Pakistan</p>
        </div>
        <div className="flex items-center justify-between ">
            <span className="text-white uppercase text-sm font-bold">city</span>
            <p className="text-primary text-sm font-bold ">karachi</p>
        </div>
    </div>
    <div className="bg-[#333] rounded-lg py-4 px-10 mt-2">
        <p className="text-white font-semibold text-sm">Social Links!</p>
        <div className='flex space-x-10 pt-5'>
<a href="https://github.com/Iqra562" target="_blank" rel="noopener noreferrer">
  <GitHubIcon className="text-3xl text-white" />
</a>             
<a href="https://www.linkedin.com/in/iqra-khaliq/" target="_blank" rel="noopener noreferrer">

    <LinkedinIcon className="text-3xl text-white" />
    </a>             

        </div>
    </div>
    <div className='py-6'>

<a href='/Resume-Iqra.pdf' download='Resume-Iqra'>
            
        <SecondaryBtn className='w-full' text="Resume" iconPosition='right' customIcon={<DownlaodIcon className='text-white text-xl animate-bounce ' /> }/>
        </a>
    </div>
 </div>
   </div>
   </div>
)
};
export default ProfileLeftSection

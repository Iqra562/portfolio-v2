import { SecondaryBtn,Heading } from "../../../generalComponents"
import { IoHomeOutline } from "react-icons/io5";
import { IoIosDoneAll } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { icons } from "../../../../utilities/icons/Icons";
function Section() {
    const DoneIcon = icons.done
    return (
        <div className="px-2 md:px-8 pt-10 pb-14 space-y-4 md:space-y-8">
      <Heading preFix='Work ' postFix='Experience'/>
           
            
           <div className="pt-0 md:pt-5 space-y-5 md:space-y-0">
             <div className="flex flex-col md:flex-row gap-y-4 ">
                <div className=" md:w-[30%]   flex flex-col itemscenter space-x2 md:space-x-0  md:block">
                  <h6 className="text-white text-lg">Silicon Systems</h6>
                  <span className="text-primary">Nov 2024 - March 2025</span>
                </div>
                <div className="relative  border-l-[1px] border-night-black  pb-4 md:pb-8 md:w-[70%]  " >
                   <span className="bg-primary/20 absolute -left-[6.5px] md:-left-[13px]  -top-[3.5px] md:-top-[10px] h-3 md:h-[25px] w-3 md:w-[25px] rounded-full hidden md:flex items-center justify-center  ">
  <span className="bg-secondary/60 h-1 md:h-[10px] w-1 md:w-[10px] rounded-full"></span>
</span>
<div className=" pl-2 md:pl-8  ">

                  <h6 className="text-2xl text-white font-semibold  -mt-1">Frontend Internee</h6>
                  <p className="text-primary">Built  responsive web interfaces using React.</p>
</div>
                </div>
             </div>
             <div className="flex flex-col md:flex-row gap-y-4">
                <div className=" md:w-[30%]   flex items-center space-x-2 md:space-x-0  md:block">
                  <h6 className="text-white text-lg">Apptalyst</h6>
                  <span className="text-primary">April 2025 - Present</span>
                </div>
                <div className="relative  border-l-[1px] border-night-black  pb-4 md:pb-8  md:w-[70%]" >
                   <span className="bg-primary/20 absolute -left-[6.5px] md:-left-[13px]  -top-[3.5px] md:-top-[10px] h-3 md:h-[25px] w-3 md:w-[25px] rounded-full hidden md:flex items-center justify-center  ">
  <span className="bg-secondary/60 h-1 md:h-[10px] w-1 md:w-[10px] rounded-full"></span>
</span>
<div className=" pl-2 md:pl-8  ">

                  <h6 className="text-2xl text-white font-semibold  -mt-1">Frontend Developer</h6>
                  <p className="text-primary"> Contributed to developing responsive, user-friendly web interfaces using React, Tailwind CSS, and JavaScript, and built customized websites with WordPress.
</p>
</div>
                </div>
             </div>
           
           </div>
      <Heading preFix='My ' postFix='Education'/>
           
            
           <div className="pt-0 md:pt-5 space-y-5 md:space-y-0">
             
               <div className="flex flex-col gap-y-4 md:flex-row">
                <div className=" md:w-[30%]   flex flex-col  md:space-x-0  md:block">
                  <h6 className="text-white text-lg">Aptech Learning</h6>
                  <span className="text-primary">2022-2024</span>
                </div>
                <div className="relative  border-l-[1px] border-night-black  pb-4 md:pb-8  " >
                   <span className="bg-primary/20 absolute -left-[6.5px] md:-left-[13px]  -top-[3.5px] md:-top-[10px] h-3 md:h-[25px] w-3 md:w-[25px] rounded-full hidden md:flex items-center justify-center  ">
  <span className="bg-secondary/60 h-1 md:h-[10px] w-1 md:w-[10px] rounded-full"></span>
</span>
<div className=" pl-2 md:pl-8  ">

                  <h6 className="text-2xl text-white font-semibold  -mt-1">ACCP Program</h6>
                  <p className="text-primary"></p>
</div>
                </div>
             </div>
               <div className="flex flex-col gap-y-4 md:flex-row">
                <div className=" md:w-[30%]   flex flex-col    md:block">
                  <h6 className="text-white text-lg">Government Degree Girls College</h6>
                  <span className="text-primary">2024-continued</span>
                </div>
                <div className="relative  border-l-[1px] border-night-black  pb-4 md:pb-8  " >
                   <span className="bg-primary/20 absolute -left-[6.5px] md:-left-[13px]  -top-[3.5px] md:-top-[10px] h-3 md:h-[25px] w-3 md:w-[25px] rounded-full hidden md:flex items-center justify-center  ">
  <span className="bg-secondary/60 h-1 md:h-[10px] w-1 md:w-[10px] rounded-full"></span>
</span>
<div className=" pl-2 md:pl-8  ">

                  <h6 className="text-2xl text-white font-semibold  -mt-1">Intermediate</h6>
                  <p className="text-primary">Pre-engineering</p>
</div>
                </div>
             </div>
           </div>
        </div>
    )
}

export { Section }
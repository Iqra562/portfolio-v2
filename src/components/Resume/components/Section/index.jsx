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
           
            
           <div className="pt-0 md:pt-5">
             <div className="flex flex-col md:flex-row">
                <div className=" md:w-[30%]   flex items-center space-x-2 md:space-x-0  md:block">
                  <h6 className="text-white text-lg">Silicon Systems</h6>
                  <span className="text-primary">2022</span>
                </div>
                <div className="relative  border-l-[1px] border-night-black  pb-4 md:pb-8  " >
                   <span className="bg-primary/20 absolute -left-[6.5px] md:-left-[13px]  -top-[3.5px] md:-top-[10px] h-3 md:h-[25px] w-3 md:w-[25px] rounded-full hidden md:flex items-center justify-center  ">
  <span className="bg-secondary/60 h-1 md:h-[10px] w-1 md:w-[10px] rounded-full"></span>
</span>
<div className=" pl-2 md:pl-8  ">

                  <h6 className="text-2xl text-white font-semibold  -mt-1">Frontend Internee</h6>
                  <p className="text-primary">iuiou</p>
</div>
                </div>
             </div>
           
           </div>
      <Heading preFix='My ' postFix='Education'/>
           
            
           <div className="pt-0 md:pt-5">
                <div className="flex flex-col md:flex-row">
                <div className=" md:w-[30%]   flex items-center space-x-2 md:space-x-0  md:block">
                  <h6 className="text-white text-lg">Silicon Systems</h6>
                  <span className="text-primary">2022</span>
                </div>
                <div className="relative  border-l-[1px] border-night-black  pb-4 md:pb-8  " >
                   <span className="bg-primary/20 absolute -left-[6.5px] md:-left-[13px]  -top-[3.5px] md:-top-[10px] h-3 md:h-[25px] w-3 md:w-[25px] rounded-full hidden md:flex items-center justify-center  ">
  <span className="bg-secondary/60 h-1 md:h-[10px] w-1 md:w-[10px] rounded-full"></span>
</span>
<div className=" pl-2 md:pl-8  ">

                  <h6 className="text-2xl text-white font-semibold  -mt-1">Frontend Internee</h6>
                  <p className="text-primary">iuiou</p>
</div>
                </div>
             </div>
               <div className="flex flex-col md:flex-row">
                <div className=" md:w-[30%]   flex items-center space-x-2 md:space-x-0  md:block">
                  <h6 className="text-white text-lg">Silicon Systems</h6>
                  <span className="text-primary">2022</span>
                </div>
                <div className="relative  border-l-[1px] border-night-black  pb-4 md:pb-8  " >
                   <span className="bg-primary/20 absolute -left-[6.5px] md:-left-[13px]  -top-[3.5px] md:-top-[10px] h-3 md:h-[25px] w-3 md:w-[25px] rounded-full hidden md:flex items-center justify-center  ">
  <span className="bg-secondary/60 h-1 md:h-[10px] w-1 md:w-[10px] rounded-full"></span>
</span>
<div className=" pl-2 md:pl-8  ">

                  <h6 className="text-2xl text-white font-semibold  -mt-1">Frontend Internee</h6>
                  <p className="text-primary">iuiou</p>
</div>
                </div>
             </div>
           </div>
        </div>
    )
}

export { Section }
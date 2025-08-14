import { SecondaryBtn,Heading } from "../../../generalComponents"
import { IoHomeOutline } from "react-icons/io5";
import { IoIosDoneAll } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { icons } from "../../../../utilities/icons/Icons";
import { SkillsCarousal } from "../SkillsCarousal";
import GitHubCalendar from 'react-github-calendar';


function Section() {
    return (
        <div>
 
        <div className="px-2 md:px-8 pt-10 pb-14 space-y-8">
      <Heading preFix='My ' postFix='Expertise'/>
           
            <p className="text-primary text-base">
Experienced Frontend Developer specializing in React.js, turning designs into intuitive and pixel-perfect interfaces.</p>            
           <div className="pt-5">

   <SkillsCarousal/>
           </div>

         <div className="w-full overflow-x-auto py-4  ">
                  <Heading preFix='My ' postFix='Github Activity'/>



 <div className="flex justify-center mt-10">
  <GitHubCalendar 
    username="Iqra562"
   className='mx-auto'
    
  />
</div>
</div>
  </div>
  </div>
    )
}

export { Section }
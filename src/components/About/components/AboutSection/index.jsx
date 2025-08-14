import { Heading } from "../../../generalComponents"
import { icons } from "../../../../utilities/icons/Icons";
import { SkillsComponent } from "../SkillsComponent";
function AboutSection() {
    const DoneIcon = icons.done
    return (
        <div className=" px-2 md:px-8 pt-10 pb-14 space-y-8">
      <Heading preFix='About ' postFix='Me'/>
           
            <p className="text-primary text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam sint, iure voluptate ea porro at atque, veniam debitis deleniti asperiores amet adipisci nostrum. Dolore optio sapiente consectetur harum numquam.
            </p>
             <div>
                <SkillsComponent/>
             </div>
             <div className="flex  flex-col md:flex-row justify-between md:mr-40 pt-5 space-y-2 md:space-y-0">

             <div className="flex space-x-4 ">
                 <div className="space-x-2 text-primary text-sm flex">
                  <span>Phone No</span>    <span className="text-white">:</span>
                 </div>
                 <div className="text-white text-sm">0324 9291689 </div>
             </div>
             <div className="flex space-x-4 ">
                 <div className="space-x-2 text-primary text-sm flex">
                  <span>Email</span>    <span className="text-white">:</span>
                 </div>
                 <div className="text-white text-sm">iqra44938@gmail.com </div>
             </div>
             </div>
        

        </div>
    )
}

export { AboutSection}
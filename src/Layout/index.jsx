import {Introduction} from "../components/LandingPage/Introduction";
import { DesktopNav } from "../components/navbars/DesktopNav";
import ProfileLeftSection from "../components/ProfileLeftSection";
import { CenterContent } from "../Pages/CenterContent";

function Layout() {
    return (
        <div className="flex flex-row justify-start items-start w-full ">


        <div className="flex flex-col items-center  xl:flex-row  xl:gap-8    flex-grow   h-screen overflow-y-scroll xl:overflow-hidden lg:pl-24 xl:pl-0 2xl:pl-24  2xl:flex-col 2xl:overflow-y-scroll">
         <div className="w-full lg:w-[70%] xl:w-[22%]  flex flex-col justify-center xl:mr-14 2xl:mr-0  mt-7 lg:mt-0 px-3 xl:px-0 2xl:w-[50%] ">

          <ProfileLeftSection/>
         </div>
           <div className="w-full lg:w-[70%] xl:w-[60%] 2xl:w-[50%]   pt-7 px-3    xl:px-7  2xl:px-0 ">

          <CenterContent/>
           </div>
          
           
        </div>

         <div className="pr-5 pt-5 hidden lg:flex  h-full     ">
             <DesktopNav/>
           </div> 
        </div>
    )
}
export default Layout;
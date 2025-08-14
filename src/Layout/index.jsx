import {Introduction} from "../components/LandingPage/Introduction";
import { DesktopNav } from "../components/navbars/DesktopNav";
import ProfileLeftSection from "../components/ProfileLeftSection";
import { CenterContent } from "../Pages/CenterContent";

function Layout() {
    return (
        <div className="flex flex-row justify-start items-start w-full ">


        <div className="flex flex-col items-center  xl:flex-row  xl:gap-8    flex-grow   h-screen overflow-y-scroll xl:overflow-hidden lg:pl-24 xl:pl-0 ultra:pl-24  ultra:flex-col ultra:overflow-y-scroll">
         <div className="w-full lg:w-[80%] xl:w-[23%]  flex flex-col justify-center xl:mr-14  2xl:mr-14  ultra:mr-0 mt-7 lg:mt-0 px-3 lg:px-0 ultra:w-[50%]  lg:pt-6 xl:pt-0 ultra:pt-6 ">

          <ProfileLeftSection/>
         </div>
           <div className="w-full lg:w-[80%] xl:w-[69%] ultra:w-[50%] px-3 lg:px-0 xl:px-7  ultra:px-0 ">

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
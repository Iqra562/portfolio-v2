import {Introduction} from "../components/LandingPage/Introduction";
import { DesktopNav } from "../components/navbars/DesktopNav";
import ProfileLeftSection from "../components/ProfileLeftSection";
import { CenterContent } from "../Pages/CenterContent";

function Layout() {
    return (
        <div className="flex  gap-8 w-full justify-between ">
         <div className="w-[22%] mr-10 flex flex-col justify-center ">

          <ProfileLeftSection/>
         </div>
           <div className="w-[62%]  pt-3">

          <CenterContent/>
           </div>
           <div className="pr-5 pt-3">
            <DesktopNav/>
           </div>
           
        </div>
    )
}
export default Layout;
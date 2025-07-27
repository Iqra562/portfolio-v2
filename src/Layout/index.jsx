import Introduction from "../components/LandingPage/Introduction";
import ProfileLeftSection from "../components/ProfileLeftSection";

function Layout() {
    return (
        <div className="flex gap-8 ">
            <div className="w-[22%]  h-screen  flex justify-center items-center">

                <ProfileLeftSection />
            </div>
            <div className="w-[60%] h-screen">

                <Introduction />
            </div>
        </div>
    )
}
export default Layout;
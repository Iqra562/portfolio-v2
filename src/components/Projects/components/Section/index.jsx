import { SecondaryBtn,Heading } from "../../../generalComponents"
import blogImg from "../../../../assets/images/project.png"

function Section() {
    return (
        <div className=" px-2 md:px-8 pt-10 pb-14 space-y-8">
      <Heading preFix='My ' postFix='Projects'/>
           
            
           <div className="pt-5">
           <div className="h-60 w-full  md:w-2/3 rounded-3xl overflow-hidden relative group cursor-pointer" >
                <img src={blogImg} alt=""  className="h-full w-full  opacity-5 group-hover:opacity-50 transition-opacity duration-300"/>
                  <div className="absolute z-10  top-0 w-full h-full md:px-10 py-10  ">
<h6 className="text-white text-2xl font-semibold ">Blog Portal</h6>
<span className="text-white">Frontend Development.</span>
<div>
  <span className="text-primary text-sm font-semibold">#React js </span>
  <span className="text-primary text-sm font-semibold">#Ant design </span>
  <span className="text-primary text-sm font-semibold">#React query </span>
  <span className="text-primary text-sm font-semibold">#Api sauce </span>
  <span className="text-primary text-sm font-semibold">#Restful Api</span>
</div>
<div className="mt-5 text-primary hover:underline font-semibold" ><a href="https://blog-portal-react-js.vercel.app/login" target="_blank">Visit Project</a></div>
                  </div>
            </div>   
           
           </div>
      
        </div>
    )
}

export { Section }
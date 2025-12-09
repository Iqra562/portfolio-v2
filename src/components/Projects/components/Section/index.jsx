import { SecondaryBtn,Heading } from "../../../generalComponents"
import shopco from "../../../../assets/images/shopco.png"
import motion from "../../../../assets/images/motion.png"

function Section() {
    return (
        <div className=" px-2 md:px-8 pt-10 pb-14 space-y-8">
      <Heading preFix='My ' postFix='Projects'/>
           
            
           <div className="pt-5 space-y-10">
           <div className="h-80 md:h-60 w-full   rounded-3xl overflow-hidden relative group cursor-pointer" >
                <img src={shopco} alt=""  className="h-full w-full  opacity-5 group-hover:opacity-50 transition-opacity duration-300 object-cover object-top"/>
                  <div className="absolute z-10  top-0 w-full h-full px-4 md:px-10 py-3 md:py-10">
<h6 className="text-white text-2xl font-semibold ">Ecommerce Website</h6>
<span className="text-white">MERN Stack Development.</span>
<div>
  <div className="flex flex-col md:flex-row space-x-1">
    <div><span className="text-gray-300 uppercase text-xs font-semibold">frontend Technologies:{" "} </span></div>
<div>
 
  <span className="text-white text-sm font-semibold">React js, </span>
  <span className="text-white text-sm font-semibold">Ant design, </span>
  <span className="text-white text-sm font-semibold">React query, </span>
  <span className="text-white text-sm font-semibold">Axios, </span>
  <span className="text-white text-sm font-semibold">React Hook form, </span>
  <span className="text-white text-sm font-semibold">Restful Apis</span>
</div>
  </div>
  <div className="flex flex-col md:flex-row space-x-1">
    <div><span className="text-gray-300 uppercase text-xs font-semibold">Backend Technologies:{" "} </span></div>
<div>

  <span className="text-white text-sm font-semibold">Nodejs, </span>
  <span className="text-white text-sm font-semibold">Mongodb </span>

</div>
  </div>
 
</div>
<div className="mt-5 text-primary hover:underline font-semibold" ><a href="https://shop-co-vert-mu.vercel.app/" target="_blank">Visit Project</a></div>
                  </div>
            </div>   
           <div className="h-80 md:h-60 w-full   rounded-3xl overflow-hidden relative group cursor-pointer" >
                <img src={motion} alt=""  className="h-full w-full  opacity-5 group-hover:opacity-50 transition-opacity duration-300 object-cover object-bottom"/>
                  <div className="absolute z-10  top-0 w-full h-full px-4 md:px-10 py-3 md:py-10">
<h6 className="text-white text-2xl font-semibold ">React Animation</h6>
 <div>
 
  <div className="flex space-x-1">
    <div><span className="text-gray-300 uppercase text-xs font-semibold">Animation Lib:{" "} </span></div>
<div>

  <span className="text-white text-sm font-semibold">Motion </span>

</div>
  </div>
 
</div>
<div className="mt-5 text-primary hover:underline font-semibold" ><a href="https://blog-portal-react-js-wtm5.vercel.app/about" target="_blank">Visit Project</a></div>
                  </div>
            </div>   
           
           </div>
         
      
        </div>
    )
}

export { Section }
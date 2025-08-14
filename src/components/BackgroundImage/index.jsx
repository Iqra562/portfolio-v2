import './BackgroundImage.css'
function BackgroundImage() {
 
  return (
    <div className="w-full h-screen bg-[#18191b]  flex justify-between  fixed top-0 left-0 overflow-y-hidden -z-10">
     <div className="border border-dotted border-night-black w-[2px] h-screen relative">
     </div>
     <div className="border border-dotted border-night-black w-[2px] h-screen relative">
      <div style={{ "--duration": "20s" }} className="animated-icons" ></div>

     </div>
     <div className="border border-dotted border-night-black w-[2px] h-screen relative">
            <div   style={{
    "--duration": "30s",
    "--direction": "reverse"
  }} className="animated-icons"></div>

     </div>
     <div style={{ "--duration": "30s" }} className="border border-dotted border-night-black w-[2px] h-screen relative hidden md:block">
                  <div className="animated-icons"></div>

     </div>
          <div className="border border-dotted border-night-black w-[2px] h-screen relative">
            <div   style={{
    "--duration": "30s",
    "--direction": "reverse"
  }} className="animated-icons"></div>

     </div>

     
     <div className="border border-dotted border-night-black w-[2px] h-screen"></div>
    </div>
  )
}

export default BackgroundImage;

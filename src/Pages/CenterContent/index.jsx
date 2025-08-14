import {Introduction,About, SkillsSection, Resume, Projects, Contact} from "../../components"

function CenterContent(){
    return(
   <div className="w-full xl:overflow-y-scroll xl:h-screen ultra:h-full pt-4 space-y-7 py-10" >
    <div className="w-full" id="home">

    <Introduction/>
    </div> 
    <div className="w-full" id="about">

    <About/>
    </div>
    <div className="w-full" id="skills">

    <SkillsSection/>
    </div>
    <div className="w-full" id="resume">

    <Resume/>
    </div>
    <div className="w-full" id="projects">

    <Projects/> 
    </div>
    <div className="w-full" id="contact">

    <Contact/>
    </div>
   
   </div>
    )
}

export {CenterContent}
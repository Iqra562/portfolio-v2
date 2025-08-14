function TitleButton({icon:Icon,title}){
    return(
 <button className="border border-night-black py-2.5 px-6 rounded-full flex justify-center items-center space-x-2 hover:bg-neutral-900 hover:border-neutral-900 transition-all duration-300   animate-scaleOnce active:animate-popUp  " > <Icon className="text-secondary text-sm "/> <span className="uppercase text-primary text-sm font-normal ">{title}</span> </button>
    )
}

export {TitleButton}
import {icons} from '../../../utilities/icons/Icons'


const Home = icons.home;



function DesktopNav(){
    return(
    <div className='inline-block w-fit h-fit border border-night-black rounded-full p-3  '>

   <div className='flex flex-col  gap-3'>
    <div className='text-white hover:text-secondary hover:bg-primaryDark p-1  rounded-full cursor-pointer '>
  <button type='button' className='text-xl p-2'>

   <Home />
  </button>
    </div>
    <div className='text-white hover:text-secondary hover:bg-primaryDark p-1  rounded-full cursor-pointer '>
  <button type='button' className='text-xl p-2'>

   <Home />
  </button>
    </div>
    <div className='text-white hover:text-secondary hover:bg-primaryDark p-1  rounded-full cursor-pointer '>
  <button type='button' className='text-xl p-2'>

   <Home />
  </button>
    </div>
   
   
    </div>
 
   </div> 
    )
}

export   {DesktopNav};
import {icons} from '../../utilities/icons/Icons'
import {SecondaryBtn} from '../generalComponents'
function ProfileLeftSection(){
    const GitHubIcon = icons.github;
    const LinkedinIcon = icons.linkedin;
    const DownlaodIcon = icons.download;

return(
<div className="w-full">

   <div className="bg-primaryDark   overflow-hidden rounded-2xl w-full ">

    <div className="relative  bg-green-50 ">

    <div className="absolute bg-[#18191A] h-12 w-36 z-2 p-2 right-0"></div>
    <div className="absolute bg-[#18191A] p-1 h-12 z-2 right-[7.2rem] -top-5 w-20 rotate-45"></div>
    </div>
 <div className=" pt-16 px-6">
    <div className="flex flex-col justify-center items-center ">

    <div className="w-[125px] h-[125px] rounded-full border-8 border-night-black overflow-hidden ">
         <img src='' alt="" className='w-full'   style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure the image covers the entire space
              objectPosition: "left center",
            //   borderRadius: "50%",
            }}/>
    </div>
    <h1 className="text-center text-white font-bold text-lg ">IQRA</h1>
     <h2 className="text-secondary font-bold">Frontend Developer</h2>
    <hr  className="border border-night-black w-full"/>
    </div>
    <div className="pt-1 space-y-3">
        <div className="flex items-center justify-between ">
            <span className="text-white uppercase text-sm font-bold">country</span>
            <p className="text-primary text-sm font-bold">Pakistan</p>
        </div>
        <div className="flex items-center justify-between ">
            <span className="text-white uppercase text-sm font-bold">city</span>
            <p className="text-primary text-sm font-bold ">karachi</p>
        </div>
    </div>
    <div className="bg-[#333] rounded-lg py-4 px-10 mt-2">
        <p className="text-white font-semibold text-sm">Social Links!</p>
        <div className='flex space-x-10 pt-5'>
                 <GitHubIcon className="text-3xl text-white" />
                 <LinkedinIcon className="text-3xl text-white" />
        </div>
    </div>
    <div className='py-6'>
        <SecondaryBtn className='w-full' text="download cv" iconPosition='right' customIcon={<DownlaodIcon className='text-white text-xl animate-bounce ' /> }/>
    </div>

 </div>
   </div>
   </div>
)
};
export default ProfileLeftSection

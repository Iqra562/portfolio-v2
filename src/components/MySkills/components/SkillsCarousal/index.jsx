import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub } from "react-icons/fa6";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { icons } from '../../../../utilities/icons/Icons';

export function SkillsCarousal() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const percentage = '80'
  const skills = [
  { name: "HTML", icon: icons.html, percentage: 90 },
  { name: "CSS", icon: icons.css, percentage: 85 },
  { name: "Tailwind CSS", icon: icons.tailwind, percentage: 85 },
  { name: "JavaScript", icon: icons.js, percentage: 80 },
  { name: "React", icon: icons.reactjs, percentage: 80 },
  { name: "MUI", icon: icons.mui, percentage: 75 },
  { name: "Redux", icon: icons.redux, percentage: 75 },
  { name: "WordPress", icon: icons.wordpress, percentage: 80 },
  { name: "Node.js", icon: icons.nodejs, percentage: 50 },
  { name: "MongoDB", icon: icons.mongoose, percentage: 50 },
];


  return (
    <div className="relative">
      {/* Navigation buttons */}
      
      <button
        ref={prevRef}
        className="absolute right-10 md:right-20 -top-8 md:-top-40 lg:-top-48 xl:-top-44 -translate-y-1/2 z-10 bg-transparent border border-night-black transition-all duration-200 hover:bg-black hover:border-none  text-white px-2 md:px-4 py-2 md:py-4 rounded-full "
      >
        <FaAngleLeft/>
      </button>
     
       <button
        ref={nextRef  }
        className="absolute right-0 -top-8 md:-top-40 lg:-top-48 xl:-top-44 -translate-y-1/2 z-10 bg-transparent border border-night-black transition-all duration-200 hover:bg-black hover:border-none  text-white px-2 md:px-4 py-2 md:py-4 rounded-full "
      >
         <FaAngleRight/>
      </button>

      <Swiper
         breakpoints={{
    320: { 
      slidesPerView: 2,
    },
    768: { 
      slidesPerView: 3.5,
    },
    1024: { 
      slidesPerView: 4.5,
    },
  }}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Connect buttons to swiper after init
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {/* {[...Array(9)].map((_, i) => ( */}

        {
          skills.map((skill,i)=>(
<SwiperSlide key={i} className='inline '>
             <div className='flex flex-col items-center space-y-5'>

             <skill.icon className='text-primary text-3xl'/>
             <div >
                <div>
 <div 
//  style={{ width: 200, height: 200 }} 
 className=' '>
    <CircularProgressbar
      value={skill.percentage}
      text={`${skill.percentage}%`}
      strokeWidth={2} 
      styles={{
        path: {
        //   stroke: `rgba(62, 152, 199, ${percentage / 100})`,
          stroke: `#069C7A`,
          strokeLinecap: 'butt',
        },
        trail: { stroke: '#d6d6d6' },
        text: { fill: 'white', fontSize: '16px' ,fontWeight:"bold"}
      }}
    />
  </div>
                </div>
             </div>
           <div className='text-white font-medium'>{skills.nam}</div>
            </div>
        </SwiperSlide>
          ))
        }
          
        {/* ))} */}
      </Swiper>
    </div>
  );
}

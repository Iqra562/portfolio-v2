import { Heading } from "../../../generalComponents";
import shopco from "../../../../assets/images/project_1.PNG";
import elvoren from "../../../../assets/images/elvoren.PNG";
import motion from "../../../../assets/images/motion.png";

function Section() {
  return (
    <div className="px-2 md:px-8 pt-10 pb-14 space-y-8">
      <Heading preFix="My " postFix="Projects" />

      <div className="pt-5 space-y-10">
        {/* CARD 1 */}
        <div className="h-80 md:min-h-60 w-full rounded-3xl overflow-hidden relative group cursor-pointer">
          {/* Image */}
          <img
            src={shopco}
            alt=""
            className="h-full w-full object-cover object-top transition-all duration-300"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/90 transition-all duration-300"></div>

          {/* Content */}
          <div className="absolute z-10 top-0 w-full h-full px-4 md:px-10 py-3 md:py-10">
            <h6 className="text-white text-2xl font-semibold   opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Ecommerce Website
            </h6>
            <span className="text-white  text-sm font-semibold  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              MERN Stack Development.
            </span>

            <div className="mt-2">
              <div className="flex flex-col md:flex-row space-x-1">
                <span className="text-gray-300 text-sm font-semibold  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Frontend:
                </span>
                <span className="text-gray-300 text-sm font-semibold  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {" "}
                  React, Ant Design, React Query, Axios, React Hook Form, REST
                  APIs
                </span>
              </div>

              <div className="flex flex-col md:flex-row space-x-1 mt-1">
                <span className="text-gray-300 text-sm font-semibold  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Backend:
                </span>
                <span className="text-gray-300 text-sm font-semibold  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Node.js, MongoDB
                </span>
              </div>
            </div>

            {/* Hidden → visible on hover */}
            <div className="mt-5 space-y-1">

            <div className=" text-white font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <a href="https://shop-co-vert-mu.vercel.app/" target="_blank">
                Visit Project →
              </a>
            </div>
            <div className=" text-white font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <a href="https://github.com/Iqra562/Shop.co" target="_blank">
                Github Frontend Link 
              </a>
            </div>
            <div className=" text-white font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <a href="https://github.com/Iqra562/shop.co-backend" target="_blank">
                Github Backend Link 
              </a>
            </div>
            </div>

          </div>
        </div>

        {/* CARD 2 */}
        <div className="h-80 md:h-60 w-full rounded-3xl overflow-hidden relative group cursor-pointer">
          {/* Image */}
          <img
            src={motion}
            alt=""
            className="h-full w-full object-cover object-bottom transition-all duration-300"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/90 transition-all duration-300"></div>

          {/* Content */}
          <div className="absolute z-10 top-0 w-full h-full px-4 md:px-10 py-3 md:py-10">
            <h6 className="text-white text-2xl font-semibold  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              React Animation
            </h6>

            <div className="mt-2 flex space-x-1">
              <span className="text-gray-300 uppercase text-sm font-semibold  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Animation:
              </span>
              <span className="text-gray-300 text-sm font-semibold  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Motion
              </span>
            </div>

            {/* Hidden → visible on hover */}
            <div  className="mt-5 space-y-1">

            <div className=" text-white font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <a
                href="https://blog-portal-react-js-wtm5.vercel.app/about"
                target="_blank"
              >
                Visit Project →
              </a>
            </div>
            <div className=" text-white font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <a
                href="https://github.com/Iqra562/react-animation"
                target="_blank"
              >
                Github Link 
              </a>
            </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="h-80 md:h-60 w-full rounded-3xl overflow-hidden relative group cursor-pointer">
          {/* Image */}
          <img
            src={elvoren}
            alt=""
            className="h-full w-full object-cover object-top transition-all duration-300"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/90 transition-all duration-300"></div>

          {/* Content */}
          <div className="absolute z-10 top-0 w-full h-full px-4 md:px-10 py-3 md:py-10">
            <h6 className="text-white text-2xl font-semibold   opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Ecommerce Jewellery Website
            </h6>
            <span className="text-white  text-sm font-semibold  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {" "}
              Full-stack Framework: Next JS
            </span>

            <div className="mt-2">
              <div className="flex flex-col md:flex-row space-x-1">
              
                <span className="text-gray-300 text-sm font-semibold  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {" "}
                   Ant Design, React Query, Axios, React Hook Form, Integration, Typescript
                </span>
              </div>
            </div>

            {/* Hidden → visible on hover */}
            <div className="mt-5 space-y-1">

            <div className=" text-white font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <a href="https://elvoren.netlify.app/" target="_blank">
                Visit Project →
              </a>
            </div>
            <div className=" text-white font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <a href="https://github.com/Iqra562/elvoren" target="_blank">
                Github Link 
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Section };

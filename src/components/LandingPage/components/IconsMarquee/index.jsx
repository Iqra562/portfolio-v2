import {icons} from '../../../../utilities/icons/Icons'


const HTML = icons.html;
const CSS = icons.css;
const JS = icons.js;
const  React  =icons.reactjs;
const  MUI  =icons.mui;
const  Node  =icons.nodejs;
const MongoDb = icons.mongoose;
const Wordpress = icons.wordpress;


export const logos = [HTML, CSS,JS,React,MUI,Node,MongoDb,Wordpress];

export const IconsMarquee = () => {
  return (
    <div className="overflow-hidden w-full ">
      <div className="animate-marquee flex justify-between space-x-8 overflow-hidden"
       style={{ width: `calc(100px * ${logos.length * 2})` }}
       >
        {logos.concat(logos).map((IconComponent, idx) => (
          <IconComponent key={idx} className="text-3xl text-slate-400 flex-shrink-0" />
        ))}
      </div>
    </div>
  );
};

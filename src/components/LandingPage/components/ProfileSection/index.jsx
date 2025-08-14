import { SecondaryBtn,Heading } from "../../../generalComponents"
import { IoHomeOutline } from "react-icons/io5";
import { IoIosDoneAll } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { IconsMarquee } from "../../components";
import { icons } from "../../../../utilities/icons/Icons";
function ProfileSection() {
    const DoneIcon = icons.done
    return (
        <div className="px-2 md:px-8 pt-10 pb-14 space-y-8">
      <Heading preFix='I craft the ' postFix='web’s visual experience'/>
           
            <p className="text-primary text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam sint, iure voluptate ea porro at atque, veniam debitis deleniti asperiores amet adipisci nostrum. Dolore optio sapiente consectetur harum numquam.
            </p>
            <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                    <DoneIcon className="text-xl text-secondary" />
                    <span className="text-sm text-primary capitalize">Available for work</span>
                </div>
                <div className="flex items-center space-x-2">
                    <DoneIcon className="text-xl text-secondary" />
                    <span className="text-sm text-primary capitalize">full time</span>
                </div>
                <div></div>

            </div>
            <SecondaryBtn className="font-semibold py-5" text="Hire me" icon={IoIosSend} />
            <div className="flex flex-col  md:flex-row space-y-4 md:space-y-0">
                <div className="border-l-2 border-secondary font-semibold pl-2 pr-20">
                    <p className="text-white text-sm">Trusted</p>
                    <p className="text-white text-sm">Technologies</p>
                </div>
                <div className=" overflow-hidden">
                    <IconsMarquee />

                </div>
            </div>

        </div>
    )
}

export { ProfileSection }
import {IoIosNotificationsOutline} from "react-icons/io";
import { IoEarthOutline } from "react-icons/io5";
import {ModeToggle} from "@/components/ui/SwitchTheme.jsx";
import {Card} from "@/components/ui/card.jsx";


function Header() {
    return (
        <Card className="Header fixed left-0 top-0 right-0 h-20 border-none rounded-none flex items-center justify-between px-10 z-10">
            <div className="logo flex gap-2 items-center text-xl font-bold">
                <img src="https://images.squarespace-cdn.com/content/v1/5e0849d5b75e913537ba6e4b/1580072657793-FQHY1078YO7V1B6O3A5C/Target%2BLogo%2B_%2BPictorial%2BLogo%2BExample%2B_%2BMill%2BCreek%2BCreative.png" className="w-10" alt=""/>
                <span>HiganTech</span>
            </div>
            <div className="links flex text-2xl gap-5 items-center">
                <div className="language">
                    <IoEarthOutline className="cursor-pointer"/>
                </div>
                <div className="theme-switch">
                    <ModeToggle/>
                </div>
                <div className="notifications">
                    <IoIosNotificationsOutline className="cursor-pointer"/>
                </div>
                <div className="profile text-xl flex gap-2 items-center">
                    <span>Name</span>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
                        alt="" className="w-10"/>
                </div>
            </div>
        </Card>
    );
}

export default Header;
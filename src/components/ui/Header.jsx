import {IoIosNotificationsOutline} from "react-icons/io";
import { IoEarthOutline } from "react-icons/io5";
import {Card} from "@/components/ui/card.jsx";
import {useState} from "react";
import {Link} from "react-router-dom"
import { FaCreditCard } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaPowerOff, FaLock } from "react-icons/fa";
import {Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {useTheme} from "@/components/ui/theme-provider.jsx";
function Header() {
    const [isDropdownActive,setIsDropdownActive ] = useState(false)
    const [isThemeTogglerActive,setIsThemeTogglerActive ] = useState(false)
    const { setTheme } = useTheme()
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
                <div className="theme-switch relative">
                    <Button variant="primary" size="icon"
                            onClick={() => {
                                setIsThemeTogglerActive(!isThemeTogglerActive)
                                setIsDropdownActive(false)
                            }}>
                        <Sun
                            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                        <Moon
                            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    </Button>
                    <div className={`toggler-menu absolute font-[500] top-12 border rounded-md text-sm right-0 text-card-foreground py-2 bg-[#fff] dark:bg-background ${isThemeTogglerActive ? "" : "hidden"}`}>
                        <div className="hover:bg-accent w-24 cursor-pointer pl-2 py-[5px] text-start items-center mx-1 rounded" onClick={() => {
                            setTheme("light")
                            setIsThemeTogglerActive(false)
                        }}>
                            Light
                        </div>
                        <div className="hover:bg-accent w-24 cursor-pointer pl-2 py-[5px] text-start rounded items-center mx-1" onClick={() => {
                            setTheme("dark")
                            setIsThemeTogglerActive(false)
                        }}>
                            Dark
                        </div>
                        <div className="hover:bg-accent w-24 cursor-pointer pl-2 py-[5px] text-start rounded items-center mx-1" onClick={() => {
                            setTheme("system")
                            setIsThemeTogglerActive(false)
                        }}>
                            System
                        </div>


                    </div>

                </div>
                <div className="notifications">
                    <IoIosNotificationsOutline className="cursor-pointer"/>
                </div>
                <div className="profile text-xl flex gap-2 items-center">
                    <span>John Doe</span>
                    <div className="w-10 relative">
                        <img
                            src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                            onClick={() => {
                                setIsDropdownActive(!isDropdownActive)
                                setIsThemeTogglerActive(false)
                            } } alt=""
                            className="rounded-full cursor-pointer"/>
                        <div
                            className={`dropdown-menu absolute font-[500] top-12 border rounded-md text-sm right-0 text-card-foreground py-2 bg-[#fff] dark:bg-background ${isDropdownActive ? "" : "hidden"}`}>
                            <div className="cursor-default w-44 h-14 text-start items-center mx-1 rounded">
                                <div className="flex p-2 gap-[10px]">
                                    <div className="w-10 relative">
                                        <img
                                            src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                                            alt="" className="rounded-full w-full"/>
                                        <div
                                            className="absolute size-3 bg-green-600 rounded-full top-7 border-[#fff] dark:border-background border-2 right-0"></div>
                                    </div>
                                    <div className="flex-1 flex-col">
                                        <div className="text-[16px] flex-1">John Doe</div>
                                        <div className="text-[11px] flex-1">Admin</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[1px] mt-1 mb-1 border-b border-b-border"></div>
                            <div className="hover:bg-accent w-44 h-10 text-start rounded items-center mx-1">
                                <Link to="/account/settings" className="pl-1 py-3 text-[15px] flex gap-1 items-center">
                                    <IoMdSettings className="flex-1 text-xl"/>
                                    <div className="flex-[5]">Settings</div>
                                </Link>
                            </div>
                            <div className="hover:bg-accent w-44 h-10 text-start rounded items-center mx-1">
                                <Link to="/account/security" className="pl-1 py-3 text-[15px] flex gap-1 items-center">
                                    <FaLock className="flex-1 text-xl"/>
                                    <div className="flex-[5]">Security</div>
                                </Link>
                            </div>
                            <div className="hover:bg-accent w-44 h-10 text-start rounded items-center mx-1">
                                <Link to="/account/billing" className="pl-1 py-3 text-[15px] flex gap-1 items-center">
                                    <FaCreditCard className="flex-1 text-xl"/>
                                    <div className="flex-[5]">Billing Plan</div>
                                </Link>
                            </div>
                            <div className="w-full h-[1px] mt-1 mb-1 border-b border-b-border"></div>
                            <div className="hover:bg-accent w-44 h-10 text-start rounded items-center mx-1">
                                <div className="w-full h-full pl-2 text-[15px] flex gap-1 items-center cursor-pointer">
                                    <FaPowerOff className="text-2xl"/>
                                    <div>
                                        Log Out
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Card>
    );
}

export default Header;
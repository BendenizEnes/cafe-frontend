import { IoEarthOutline } from "react-icons/io5";
import {
    TbBell,
    TbCreditCard,
    TbLock,
    TbMoon,
    TbPower,
    TbSettings,
    TbSun
} from "react-icons/tb";
import {Card} from "@/components/ui/card.jsx";
import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button.jsx";
import {useTheme} from "@/components/ui/theme-provider.jsx";
import {useState} from "react";

function Header() {

    const [isDropdownActive,setIsDropdownActive ] = useState(false)
    const [isThemeTogglerActive,setIsThemeTogglerActive ] = useState(false)
    const { setTheme } = useTheme()

    return (
        <Card className="Header fixed left-0 top-0 right-0 h-20 rounded-none flex items-center justify-between px-10 z-10">
            <div className="logo flex gap-2 items-center text-xl font-bold">
                <img src="https://images.squarespace-cdn.com/content/v1/5e0849d5b75e913537ba6e4b/1580072657793-FQHY1078YO7V1B6O3A5C/Target%2BLogo%2B_%2BPictorial%2BLogo%2BExample%2B_%2BMill%2BCreek%2BCreative.png" className="w-10" alt=""/>
                <span>HiganTech</span>
            </div>
            <div className="links flex text-2xl gap-5 items-center">
                <div className="language">
                    <IoEarthOutline className="cursor-pointer"/>
                </div>
                <div className="theme-switch flex items-center relative">
                    <Button variant="primary" size="icon"
                            onClick={() => {
                                setIsThemeTogglerActive(!isThemeTogglerActive)
                                setIsDropdownActive(false)
                            }}>
                        <TbSun
                            className="text-2xl rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                        <TbMoon
                            className="text-2xl absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    </Button>
                    <div className={`toggler-menu absolute font-[500] top-12 border rounded-md text-sm right-0 text-card-foreground py-2 bg-[#fff] dark:bg-background ${isThemeTogglerActive ? "" : "hidden"}`}>
                        <div className="hover:bg-accent w-28 cursor-pointer pl-2 py-[8px] text-start items-center mx-1 rounded" onClick={() => {
                            setTheme("light")
                            setIsThemeTogglerActive(false)
                        }}>
                            Light
                        </div>
                        <div className="hover:bg-accent w-28 cursor-pointer pl-2 py-[8px] text-start rounded items-center mx-1" onClick={() => {
                            setTheme("dark")
                            setIsThemeTogglerActive(false)
                        }}>
                            Dark
                        </div>
                        <div className="hover:bg-accent w-28 cursor-pointer pl-2 py-[8px] text-start rounded items-center mx-1" onClick={() => {
                            setTheme("system")
                            setIsThemeTogglerActive(false)
                        }}>
                            System
                        </div>


                    </div>

                </div>
                <div className="notifications">
                    <TbBell className="cursor-pointer"/>
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
                            <div className="cursor-default w-48 h-14 text-start items-center mx-1 rounded">
                                <div className="flex p-2 gap-[10px]">
                                    <div className=" w-10 relative">
                                        <img
                                            src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                                            alt="" className="rounded-full w-full"/>
                                        <div className="absolute size-3 bg-green-600 rounded-full top-7 border-[#fff] dark:border-background border-2 right-0"></div>
                                    </div>
                                    <div className="flex-col">
                                        <div className="text-[16px]">John Doe</div>
                                        <div className="text-[11px]">Admin</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[1px] mt-1 mb-1 border-b border-b-border"></div>
                            <div className="hover:bg-accent w-48 text-start rounded items-center mx-1">
                                <Link to="/account/settings" className="pl-1 py-3 text-[15px] flex items-center">
                                    <TbSettings  className="text-2xl mr-2"/>
                                    <div>Settings</div>
                                </Link>
                            </div>
                            <div className="hover:bg-accent w-48 text-start rounded items-center mx-1">
                                <Link to="/account/security" className="pl-1 py-3 text-[15px] flex items-center">
                                    <TbLock className="text-2xl mr-2"/>
                                    <div className="">Security</div>
                                </Link>
                            </div>
                            <div className="hover:bg-accent w-48 text-start rounded items-center mx-1">
                                <Link to="/account/billing" className="pl-1 py-3 text-[15px] flex items-center">
                                    <TbCreditCard className="text-2xl mr-2"/>
                                    <div>Billing Plan</div>
                                </Link>
                            </div>
                            <div className="w-full h-[1px] mt-1 mb-1 border-b border-b-border"></div>
                            <div className="hover:bg-accent w-48 text-start rounded items-center mx-1">
                                <div className="pl-1 py-3 text-[15px] flex items-center cursor-pointer">
                                    <TbPower className="text-2xl mr-2"/>
                                    <div>Log Out</div>
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
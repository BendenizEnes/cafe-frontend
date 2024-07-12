import {NavLink} from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineTableBar} from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { useState} from "react";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import {Card} from "@/components/ui/card.jsx";

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [activeMenu, setActiveMenu] = useState(0);
    const toggleSubMenu = (itemId) => {setActiveMenu(activeMenu === itemId ? 0 : itemId);};

    function checkLocation() {
        setTimeout(() => {
            const dropdown = document.querySelector(".dropdown");
            if(window.location.pathname === "/company" || window.location.pathname === "/contract"){
                dropdown.classList.add("active");
            }else{
                dropdown.classList.remove("active");
            }
        },20)
    }

    const asideData = [
        {
            id: 1,
            name: "Dashboard",
            icon: <RxDashboard/>,
            url: "/dashboard",
        },
        {
            id: 2,
            name: "Calendar",
            icon: <LuCalendarDays/>,
            url: "/calendar",
        },
        {
            id: 3,
            name: "Company",
            icon: <FaRegBuilding/>,
            attributes: [
                {
                    id: 1,
                    name: "Company List",
                    url: "/company",
                },
                {
                    id: 2,
                    name: "Contract List",
                    url: "/contract",
                },
            ],
        },
        {
            id: 4,
            name: "Tables",
            icon: <MdOutlineTableBar/>,
            url: "/tables",
        },
    ];

    return (
        <Card className={`font-[500] ${isSidebarOpen ? "w-60" : "w-20"} transition-[width] duration-500 ease-in-out border-none`}>
                <div className="toggle-button-container w-full h-14 relative">
                    <div className="toggle-button absolute top-5 right-[-18px] rounded-full">
                        <button className="text-white p-[5px] w-full h-full bg-[#1DBAFF] border-[6px] border-background rounded-full" onClick={ () => setIsSidebarOpen(!isSidebarOpen)}>
                            {isSidebarOpen ?  <IoIosArrowBack/> : <IoIosArrowForward/>}
                        </button>
                    </div>
                </div>
            {asideData.map((item) => {
                return(
                    <div key={item.id}>
                        {item.url ? (
                            <NavLink to={item.url} className="flex items-center gap-5" onClick={checkLocation}>
                                <div className="p-3 pl-7 text-2xl icon rounded-r-full">
                                    {item.icon}
                                </div>
                                <div className="overflow-hidden transition-all duration-1000">
                                    {isSidebarOpen ? item.name : ""}
                                </div>
                                <div className=" overflow-hidden bg-transparent flex justify-end pr-8 z-0">
                                </div>
                            </NavLink>) : (
                            <div>
                                <div className="flex items-center gap-5 cursor-pointer dropdown"
                                     onClick={() => toggleSubMenu(item.id)}>
                                    <div className="p-3 pl-7 text-2xl icon rounded-r-full">
                                        {item.icon}
                                    </div>
                                    <div className="overflow-hidden">
                                        {isSidebarOpen ? item.name : ""}
                                    </div>
                                    <div className=" overflow-hidden bg-transparent flex justify-end pr-8">
                                        {
                                            isSidebarOpen ? <IoIosArrowForward className={`duration-300 ${activeMenu === item.id ? "rotate-90" : ""}`}/> : ""
                                        }

                                    </div>
                                </div>
                                <div className={`${activeMenu === item.id ? "" : "hidden"} ${isSidebarOpen ? "" : "hidden"} flex flex-col items-start`}>
                                    {item.attributes.map((subItem) => (
                                        <NavLink to={subItem.url} key={subItem.id} className="h-10 gap-5 p-1 cursor-pointer" onClick={checkLocation}>
                                            <span className="text-sm pl-16 w-full overflow-hidden">
                                                {isSidebarOpen ? subItem.name : ""}
                                            </span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </Card>
    );
}

export default Sidebar;
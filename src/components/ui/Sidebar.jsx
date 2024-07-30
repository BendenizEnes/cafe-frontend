import {NavLink} from "react-router-dom";
import { MdOutlineTableBar} from "react-icons/md";
import {TbBook, TbBuilding, TbCalendarMonth, TbChevronLeft, TbChevronRight, TbLayoutGrid} from "react-icons/tb";
import { useState} from "react";

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
            icon: <TbLayoutGrid className="dark:text-white"/>,
            url: "/dashboard",
        },
        {
            id: 2,
            name: "Schedule",
            icon: <TbCalendarMonth className="dark:text-white"/>,
            url: "/schedule",
        },
        {
            id: 3,
            name: "Company",
            icon: <TbBuilding className="dark:text-white"/>,
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
            icon: <MdOutlineTableBar className="dark:text-white"/>,
            url: "/tables",
        },
        {
            id: 5,
            name: "Menu",
            icon: <TbBook  className="dark:text-white"/>,
            url: "/menu",
        },
    ];

    return (
        <Card className={`font-[500] ${isSidebarOpen ? "w-60" : "w-20"} transition-[width] duration-500 p-0 ease-in-out`}>
                <div className="toggle-button-container w-full h-4 relative">
                    <div className="toggle-button absolute top-5 right-[-18px] rounded-full">
                        <button className="text-white p-[5px] w-full h-full bg-[#1DBAFF] border-[6px] border-background rounded-full" onClick={ () => {
                            setIsSidebarOpen(!isSidebarOpen)
                            setActiveMenu(false)
                        }}>
                            {isSidebarOpen ?  <TbChevronLeft /> : <TbChevronRight />
                            }
                        </button>
                    </div>
                </div>
            {asideData.map((item) => {
                return(
                    <div key={item.id}>
                        {item.url ? (
                            <NavLink to={item.url} className="flex items-center gap-5" onClick={checkLocation}>
                                <div className="p-3 pr-2 pl-7 text-2xl icon rounded-r-full">
                                    {item.icon}
                                </div>
                                <div className={`overflow-hidden transition-all duration-1000 ${isSidebarOpen ? "w-full" : "w-0"}`}>
                                    {item.name}
                                </div>
                            </NavLink>) : (
                            <div>
                                <div className="flex items-center gap-5 cursor-pointer dropdown"
                                     onClick={() => toggleSubMenu(item.id)}>
                                    <div className="p-3 pr-2 pl-7 text-2xl icon rounded-r-full">
                                        {item.icon}
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all flex-row flex gap-5 items-center duration-1000 ${isSidebarOpen ? "w-full" : "w-0"}`}>
                                        {item.name}
                                           <TbChevronRight className={`duration-300 mr-6 ${activeMenu === item.id ? "rotate-90" : ""} ${isSidebarOpen ? "" : "w-0"}`}/>
                                    </div>

                                </div>
                                <div
                                    className={`${activeMenu === item.id ? "" : "hidden"} flex flex-col items-start`}>
                                    {item.attributes.map((subItem) => (
                                        <NavLink to={subItem.url} key={subItem.id} className="h-10 gap-5 p-1 cursor-pointer" onClick={checkLocation}>
                                            <span className="text-sm pl-[72px] w-full overflow-hidden">
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
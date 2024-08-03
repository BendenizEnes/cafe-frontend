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
        /*{
            id: 3,
            name: "Company",
            icon: <TbBuilding/>,
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
        },*/
        {
            id: 4,
            name: "Reservations",
            icon: <MdOutlineTableBar/>,
            url: "/reservations",
        },
        {
            id: 5,
            name: "Menu",
            icon: <TbBook  className="dark:text-white"/>,
            url:"/menu"
        },
    ];

    return (
        <Card className={`font-[500] ${isSidebarOpen ? "w-64" : "w-20"} transition-[width] duration-500 p-0 ease-in-out`}>
                <div className="toggle-button-container w-full h-4 relative">
                    <div className="toggle-button absolute top-5 right-[-18px] rounded-full">
                        <button className="resizeButton text-white p-[5px] w-full h-full bg-[#1DBAFF] border-[6px] border-background rounded-full" onClick={ () => {
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
                            <NavLink to={item.url} className="flex items-center gap-3" onClick={checkLocation}>
                                <div className="p-3 pr-2 pl-6 text-2xl icon rounded-r-full">
                                    {item.icon}
                                </div>
                                <div className={`overflow-hidden transition-all duration-495 ${isSidebarOpen ? "w-full" : "w-0"}`}>
                                    {item.name}
                                </div>
                            </NavLink>) : (
                            <div>
                                <div className="flex items-center gap-3 cursor-pointer dropdown"
                                     onClick={() => toggleSubMenu(item.id)}>
                                    <div className="p-3 pr-2 pl-6 text-2xl icon rounded-r-full">
                                        {item.icon}
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all flex-row flex justify-between gap-5 items-center duration-495 ${isSidebarOpen ? "w-full" : "w-0"}`}>
                                        {item.name}
                                           <TbChevronRight className={`duration-300 mr-6 ${activeMenu === item.id ? "rotate-90" : ""} ${isSidebarOpen ? "" : "w-0"}`}/>
                                    </div>

                                </div>
                                <div className={`${activeMenu === item.id ? "" : "hidden"} flex flex-col`}>
                                    {item.attributes.map((subItem) => (
                                        <NavLink to={subItem.url} key={subItem.id} className="pb-2 flex ml-[70px]" onClick={checkLocation}>
                                            <span className="">
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
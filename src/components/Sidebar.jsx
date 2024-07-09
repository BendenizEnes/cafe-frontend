import {NavLink} from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineTableBar} from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { useState} from "react";
import {IoIosArrowForward} from "react-icons/io";

function Sidebar() {
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
        <div className="text-gray-500 font-[500] bg-white fixed top-[100px] left-5 bottom-5 py-5 w-60 rounded-2xl shadow-md shadow-gray-100 Z-10">
            {asideData.map((item) => {
                return(
                    <div key={item.id}>
                        {item.url ? (
                            <NavLink to={item.url} className="flex items-center gap-5" onClick={checkLocation}>
                                <div className="p-3 pl-6 text-2xl icon rounded-r-full">
                                    {item.icon}
                                </div>
                                <div>
                                    {item.name}
                                </div>
                            </NavLink>) : (
                            <div>
                                <div className="flex items-center gap-5 cursor-pointer dropdown" onClick={() => toggleSubMenu(item.id)}>
                                    <div className="p-3 pl-6 text-2xl icon rounded-r-full">
                                        {item.icon}
                                    </div>
                                    <div className="flex items-center gap-5">
                                        {item.name}
                                    </div>
                                    <div className="flex-1 flex justify-end pr-10">
                                        <IoIosArrowForward className={`duration-300 ${activeMenu === item.id ? "rotate-90" : ""}`}/>
                                    </div>
                                </div>
                                <div className={`${activeMenu === item.id ? "" : "hidden"} duration-500`}>
                                    {item.attributes.map((subItem) => (
                                        <NavLink to={subItem.url} key={subItem.id} className="h-10 gap-5 p-3 cursor-pointer" onClick={checkLocation}>
                                            <span className="w-12 h-full"></span>
                                            <span className="text-sm">
                                                {subItem.name}
                                            </span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    );
}

export default Sidebar;
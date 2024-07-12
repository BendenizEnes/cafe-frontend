import PropTypes from "prop-types";
import {MdOutlineRoomService} from "react-icons/md";
import {Card} from "@/components/ui/card.jsx";

function Cards({icon, title, variant, children}) {
    const CardVariant = {
        primary: {
            textCol: "text-[#54CCA1]",
            bgColor: "bg-[#DCF4EC]",
        },
        secondary: {
            textCol: "text-[#FF8E8E]",
            bgColor: "bg-[#FFEBEB]",
        },
        tertiary: {
            textCol: "text-[#00BBFF]",
            bgColor: "bg-[#DCF6FF]",
        },
        quaternary: {
            textCol: "text-[#FFA826]",
            bgColor: "bg-[#FFF2DE]",
        },
        default: {
            textCol: "text-[#566A7F]",
            bgColor: "bg-[#F5F5F9]",
        },
    };
    return (
        <div className="p-5 flex-1 flex items-center bg-card rounded-2xl gap-5 shadow-md">
            <div className={`${CardVariant[variant].textCol} ${CardVariant[variant].bgColor} text-4xl p-3 rounded-lg`}>
                {icon}
            </div>
            <div className="flex flex-col">
                <div className="font-[600] text-xl">{children}</div>
                <div className="text-sm font-[500] text-gray-400">{title}</div>
            </div>
        </div>
    );
}

Cards.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element,
    children : PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary',"quaternary","default"]),
};

Cards.defaultProps = {
    icon:<MdOutlineRoomService/>,
    variant : "default"
}

export default Cards;
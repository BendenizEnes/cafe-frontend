import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {Card} from "@/components/ui/card.jsx";
import { IoWarningOutline } from "react-icons/io5";
import { Progress } from "@/components/ui/progress.jsx"

function Billing() {
    return (
        <div className=" flex flex-col gap-5 flex-[2.5]">
                    <div className="w-full flex gap-5">
                        <Button variant="default" className="p-0 h-10 overflow-hidden"><Link to="/account/billing" className="flex items-center px-10 h-full"> Billing & Plans </Link></Button>
                        <Button variant="ghost" className="p-0 h-10 overflow-hidden"><Link to="/account/settings" className="flex items-center px-10 h-full">Settings </Link></Button>
                        <Button variant="ghost" className="p-0 h-10 overflow-hidden"><Link to="/account/security" className="flex items-center px-10 h-full">Security </Link></Button>
                    </div>
                    <Card className="overflow-hidden h-full">
                        <div className="pb-1 pr-5 mb-5 border-b-2 border-b-border inline-block font-[600] text-lg">
                            Current Plan
                        </div>
                        <div className="font-[500] text-lg mb-10 flex flex-col gap-[3px]">
                            <div>Your Current Plan is <span
                                className="px-3 py-1 bg-[#BBDDFF] font-normal text-[15px] text-[#1144CC] rounded">Basic</span>
                            </div>
                            <div className="text-[16px] font-normal">Standard plan for small to medium businesses</div>
                            <div className="text-[16px] font-normal">$250 Per Year</div>
                        </div>
                        <div className="font-[500] text-lg mb-10 flex flex-col gap-[3px]">
                            <div>Active Until Dec 19, 2024</div>
                            <div className="text-[16px] font-normal">We will send you a notification upon Subscription
                                expiration
                            </div>
                        </div>
                        <div className="font-[500] text-lg mb-5 flex flex-col gap-[3px]">
                            <div className="p-3 bg-[#FFF1D6] rounded-md text-[#EE9A01] mb-3 flex items-start gap-3 text-[17px]">
                                <div className="text-center bg-[#EE9A01] text-[#FFF1D6] text-[23px] p-1 rounded-full border-[3px] border-[#FFE5B4]"><IoWarningOutline /></div>
                                <div>
                                    <div>We need your attention!</div>
                                    <div>Your plan requires update</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[15px]"><div>Days</div><div>330 of 365 Days</div></div>
                                <Progress value="90" className="w-full bg-secondary"/>
                            </div>

                        </div>
                    </Card>
                </div>
    );
}

export default Billing;
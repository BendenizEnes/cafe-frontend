import {Button} from "@/components/ui/button.jsx";
import Layout from "@/components/ui/Layout.jsx";
import {Outlet} from "react-router-dom";


function Account() {
    return (
        <Layout>
            <main className="h-[622px] w-full flex flex-row gap-5">
                <div className="bg-card flex-1 flex flex-col items-center rounded-xl shadow-md p-8">
                    <div
                        className="profile pb-1 border-b border-b-border border-opacity-10 w-full flex flex-col items-center pt-3 gap-3">
                        <div className="photo w-32">
                            <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt=""
                                 className="w-full rounded-xl"/>
                        </div>
                        <span className="pt-1 text-foreground">John Doe</span>
                        <div className="w-1/2 flex pt-2 flex-col gap-3">
                            <Button onClick={() => document.querySelector(".upload").click()}>Change Photo</Button>
                            <input type="file" accept="image/*" className="hidden upload"/>
                            <span className="text-foreground text-[11px] font-[500] self-center">Allowed JPG, GIF or PNG.</span>
                        </div>
                    </div>
                    <div className="w-full text-start pt-5 pl-5">
                        <div className="mb-4">
                            <span className="font-[500] pr-2">Name:</span>
                            <span>John Doe</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-[500] pr-2">Email:</span>
                            <span>example@domain.com</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-[500] pr-2">Mobile:</span>
                            <span>+90 555 555 5555</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-[500] pr-2">Line:</span>
                            <span>+90 212 555 5555</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-[500] pr-2">Company:</span>
                            <span>Ah-Jin</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-[500] pr-2">Status:</span>
                            <span>Active</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-[500] pr-2">Role:</span>
                            <span>Admin</span>
                        </div>
                    </div>
                </div>
                <Outlet/>
            </main>
        </Layout>

    );
}

export default Account;
import Layout from "@/components/ui/Layout.jsx";
import {NavLink, Outlet} from "react-router-dom";
import {Button} from "@/components/ui/button.jsx";

function Reservations() {


    return (
        <Layout >
            <main className="flex flex-col gap-5 w-full">
                <div className="w-full flex gap-5">
                    <NavLink to="list" className="flex items-center h-full">
                        <Button variant="ghost" className="h-10 px-8 hover:bg-primary hover:text-primary-foreground">
                            Reservation List
                        </Button>
                    </NavLink>
                    <NavLink to="tables" className="flex items-center h-full">
                        <Button variant="ghost" className="h-10 px-8 hover:bg-primary hover:text-primary-foreground">
                           Tables
                        </Button>
                    </NavLink>
                </div>
                <div className="p-0 h-full">
                    <Outlet/>
                </div>
            </main>
        </Layout>
    );
}

export default Reservations;
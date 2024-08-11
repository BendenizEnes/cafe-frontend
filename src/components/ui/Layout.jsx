import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import {ThemeProvider} from "@/components/ui/theme-provider.jsx";

// eslint-disable-next-line react/prop-types
function Layout({children, ...rest}) {
    return (
        <div {...rest}>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <Header/>
                <div className="flex gap-5 flex-row mt-[90px] min-h-[632px] m-5">
                    <Sidebar/>
                    {children}
                </div>
            </ThemeProvider>
        </div>
    );
}

export default Layout;
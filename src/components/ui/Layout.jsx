import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

// eslint-disable-next-line react/prop-types
function Layout({children}) {
    return (
        <div className="p-5 mt-20">
            <Header/>
            <div className="flex gap-5 flex-row">
                <Sidebar/>
                {children}
            </div>

        </div>

    );
}

export default Layout;
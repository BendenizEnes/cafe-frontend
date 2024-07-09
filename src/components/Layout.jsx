import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

// eslint-disable-next-line react/prop-types
function Layout({children}) {
    return (
        <div className="p-5 mt-20 ml-[260px] h-fit">
            <Header/>
            <Sidebar/>
            {children}
        </div>

    );
}

export default Layout;
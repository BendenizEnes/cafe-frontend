import '../styles/App.css'
import { Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Security from "../components/ui/Security.jsx";
import Settings from "../components/ui/Settings.jsx";
import Billing from "../components/ui/Billing.jsx";
import Tables from "../pages/Tables.jsx";
import Layout from "../components/ui/Layout.jsx";
import Reservations from "../pages/Reservations.jsx";
import Account from "../pages/Account.jsx";
import Schedule from "@/pages/Schedule.jsx";
import Menu from "@/pages/Menu.jsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="dashboard" element={<Dashboard/>}></Route>
        <Route path="account" element={<Account/>}>
            <Route path="settings" element={<Settings/>}></Route>
            <Route path="security" element={<Security/>}></Route>
            <Route path="billing" element={<Billing/>}></Route>
        </Route>
        <Route path="schedule" element={<Schedule/>}></Route>
        <Route path="tables" element={<Tables/>}></Route>
        <Route path="reservations" element={<Reservations/>}></Route>
        <Route path="menu" element={<Menu/>}></Route>
    </Routes>
  )
}

export default App

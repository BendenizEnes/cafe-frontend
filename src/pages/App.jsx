import '../styles/App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Security from "./Security.jsx";
import Settings from "./Settings.jsx";
import Billing from "./Billing.jsx";
import Tables from "../pages/Tables.jsx";
import Layout from "../components/ui/Layout.jsx";
import Reservations from "../pages/Reservations.jsx";
import Account from "../pages/Account.jsx";
import Schedule from "@/pages/Schedule.jsx";
import Menu from "@/pages/Menu.jsx";
import Orders from "@/pages/Orders.jsx";
import BookingList from "@/pages/BookingList.jsx";
import WorkerList from "@/pages/WorkerList.jsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="dashboard" element={<Dashboard/>}></Route>
        <Route path="account" element={<Account/>}>
            <Route path="settings" element={<Settings/>}></Route>
            <Route path="security" element={<Security/>}></Route>
            <Route path="billing" element={<Billing/>}></Route>
            <Route path="employees" element={<WorkerList/>}></Route>
        </Route>
        <Route path="schedule" element={<Schedule/>}></Route>
        <Route path="reservations" element={<Reservations/>}>
            <Route path="list" element={<BookingList/>}></Route>
            <Route path="tables" element={<Tables/>}></Route>
        </Route>
        <Route path="menu" element={<Menu/>}></Route>
        <Route path="orders" element={<Orders/>}></Route>
    </Routes>
  )
}

export default App

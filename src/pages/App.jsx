import '../styles/App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Security from "./Security.jsx";
import Settings from "./Settings.jsx";
import Billing from "@/pages/Billing.jsx";
import Tables from "@/pages/Tables.jsx";
import Layout from "@/components/ui/Layout.jsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/account" element={<Navigate to="/account/billing"/>}></Route>
        <Route path="/account/settings" element={<Settings/>}></Route>
        <Route path="/account/security" element={<Security/>}></Route>
        <Route path="/account/billing" element={<Billing/>}></Route>
      <Route path="/tables" element={<Tables/>}></Route>
    </Routes>
  )
}

export default App

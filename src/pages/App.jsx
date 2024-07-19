import '../styles/App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Security from "./Security.jsx";
import Settings from "./Settings.jsx";
import Billing from "@/pages/Billing.jsx";

function App() {

  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/account" element={<Navigate to="/account/billing"/>}></Route>
        <Route path="/account/settings" element={<Settings/>}></Route>
        <Route path="/account/security" element={<Security/>}></Route>
        <Route path="/account/billing" element={<Billing/>}></Route>
      <Route path="/calendar"></Route>
    </Routes>
  )
}

export default App

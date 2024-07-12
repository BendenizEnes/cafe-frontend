import '../styles/App.css'
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";

function App() {

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/"></Route>
      <Route path="/calendar"></Route>
    </Routes>
  )
}

export default App

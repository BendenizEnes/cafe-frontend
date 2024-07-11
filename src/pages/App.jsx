import '../styles/App.css'
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/dashboard"></Route>
      <Route path="/calendar"></Route>
    </Routes>
  )
}

export default App

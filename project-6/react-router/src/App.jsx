import { Outlet } from "react-router-dom";
import Navbar from "./components/Navber/Navbar";

export default function App() {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
        <Navbar/>
        <Outlet></Outlet>
    </div>
  )
}

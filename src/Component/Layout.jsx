import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function Layout(){
    return(
        <div className="p-6 flex-col min-h-screen">
            <Header/>
            <Outlet/>
        </div>
    )
}
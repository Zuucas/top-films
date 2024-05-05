import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Navbar/navbar";



function App(){

    return ( 
        
        <div>
            <NavBar/>
            <div id='main'>
                <Outlet/>
            </div>
        </div>
        
    )
}

export default App;
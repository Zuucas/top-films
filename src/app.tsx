import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Navbar/navbar";



function App(){

    return ( 
        
        <div id='main'>
            <NavBar/>
            <div>
                <Outlet/>
            </div>
        </div>
        
    )
}

export default App;
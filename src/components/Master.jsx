import Home from "./Home.jsx"
import About from "./About.jsx"
import Skills from "./Skills.jsx"
import Information from "./Information.jsx"
import Projects from "./Projects.jsx"
import {Routes,Route} from "react-router-dom";
import Dashboard from "./Dashboard.jsx"
const Master=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Dashboard></Dashboard>}>    
            <Route path="" element={<Home></Home>}></Route>
            <Route path="Dashboard/About" element={<About></About>}></Route>
            <Route path="Dashboard/Projects" element={<Projects></Projects>}></Route> 
            <Route path="Dashboard/Skills" element={<Skills></Skills>}></Route>
            <Route path="Dashboard/Information" element={<Information></Information>}></Route>
            </Route>
        </Routes>
        </>
    )
};
export default Master;
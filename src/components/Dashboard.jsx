import React from "react";
import "./Dashboard.css"
import { Link,Outlet } from "react-router-dom";
const Dashboard=()=>{
    return(
        <>
        <header className="nav1">
        <div className="h1">
            <p style={{color:"violet", fontSize:30, fontWeight:"bold"}}>BB.</p>
            <div className="h2">
                <Link to=""><i className="fa fa-home"></i>Home</Link>
                <Link to="Dashboard/About"><i className="fa fa-user"></i>About</Link>
                <Link to="Dashboard/Projects"><i className="fa fa-desktop"></i>Projects</Link>
                <Link to="Dashboard/Skills"><i className="fa fa-laptop"></i>Skills</Link>
                <Link to="Dashboard/Information"><i className="fa fa-info"></i>Details</Link>
            </div>
        </div>
        </header>
        <br /><br />
        <br /><br />
        <Outlet></Outlet>
    
        </>
    )
};
export default Dashboard;
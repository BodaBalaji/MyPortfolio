import React from "react";
import "./Information.css";
import {useNavigate} from "react-router-dom";

  const Information=()=>{
    const hire_me=()=>{
     return navigate();
    }
    const navigate=useNavigate();
    return(
        <>
       <div className="inf1">
        <h2><span style={{color:"violet"}}>Personal Details</span></h2>
        <p>Name        :  Boda Balaji</p>
        <p>Father Name :  Boda Venkateswarlu</p>
        <p>D-O-B       :  22/08/2000</p>
        <p>Gender      :  Male</p>
        <br />
        <p>Wanna Know <span style={{color:"violet"}}>more about me</span>.., Then click on <span style={{color:"violet"}}>Resume</span>..!</p>
        <br />
        <button className="b1" onClick={hire_me}>Hire me</button> <button className="b2"><a href="https://kesare.s3.ap-south-1.amazonaws.com/Boda+Balaji_Res.pdf" target="_blank">Resume</a></button>
               </div>
             <div className="inf2">
            <div >
                <h2>FOLLOW <span style={{color:"violet"}}>ME</span> ON </h2>
                <a href="https://github.com/BodaBalaji/MyPortfolio" target="_blank"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/boda-balaji-684930285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="https://www.instagram.com/balajirysh?igsh=MXcwcDFhemZkMHU3eQ==" target="_blank"><i className="fa fa-instagram"></i></a>
            <a href="https://x.com/balajiboda2208?t=WHJRQTeOfP25af3h36eeBA&s=09" target="_blank"><i className="fa fa-twitter"></i></a>
         </div>
         <div>
            <p>Made with <span style={{color:"red"}}> ❤</span> by Boda Balaji</p>
         </div>
         </div>
        </>
    )
};
export default Information; 
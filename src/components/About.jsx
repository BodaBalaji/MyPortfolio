import React from "react";
import "./About.css";
const About=()=>{
    return(
        <>
        <div className="About">
          <h2>LET ME <span style={{color:"violet"}}>INTRODUCE </span>MYSELF</h2>
          <br />
          <br />
          <p>Hi Everyone. I am <span style={{color:"violet"}}>Boda Balaji</span> from <span style={{color:"violet"}}>Hyderabad, INDIA.</span> Iam currently doing my Internship as an FullStack Developer in ExcelR, Hyderabad.</p><br />
          <p>I fell in love with programming and I have atleast learnt something. I think..🤷🏻‍♂️</p>
          <p>I am fluent in classics like <span style={{ color:"violet"}}>JavaScript, ReactJS, SpringBoot and Go.❤</span></p>
          <p>My field of intrest's are building new <span style={{color:"violet"}}>Web Technologies and Products</span></p>
          <p>Whenever possible, I also apply my passion for developing projects with <span style={{color:"violet"}}>Node.js</span> and <span style={{color:"violet"}}>Modern JavaScript Frameworks like React.js</span></p>
        </div>
        <div className="study">
            <div className="UG">
                <h3><span style={{color:"violet"}}>MALLAREDDY ENGINEERING COLLEGE</span></h3>
                <p>👉🏻Completed my <span style={{color:"violet"}}>Graduation</span> from <span style={{color:"violet"}}>MallaReddy Engineering College</span> in EEE stream during the academics from <span style={{color:"violet"}}>2k19-2k23.</span> </p>
            </div>
            <div className="BIE">
                <h3><span style={{color:"violet"}}>NRI JUNIOR COLLEGE</span></h3>
                <p>👉🏻Completed my <span style={{color:"violet"}}>Intermediate</span> from <span style={{color:"violet"}}>NRI Junior College</span> in MPC stream during the academics from <span style={{color:"violet"}}>2k17-2k29.</span> </p>
            </div>
            <div className="SSC">
                <h3><span style={{color:"violet"}}>VIGNANA JYOTHI HIGH SCHOOL</span></h3>
                <p>👉🏻Completed my <span style={{color:"violet"}}>Schooling</span> from <span style={{color:"violet"}}>Vignana Jyothi High School</span> during the academics from <span style={{color:"violet"}}>2k07-2k19.</span> </p>
            </div>
        </div>
        </>
    )
};
export default About;
import React from "react";
import "./Projects.css";
const Projects=()=>{
    return(
        <>
        <div className="projects">
        <div className="project1">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/638/074/small_2x/illustration-isometric-concept-safety-of-online-shopping-in-e-commerce-stores-free-vector.jpg" alt="error" width={400} height={250}></img>
            <h2><span style={{color:"violet"}}>E-store</span></h2>
             <p> "Leveraging the <span style={{color:"violet"}}>MERN (MongoDB, Express.js, React.js, Node.js)</span> stack, the website offers a dynamic 
                 user interface with seamless navigation and responsiveness. Features include  <span style={{color:"violet"}}>user authentication</span>, 
                 product catalog management and  <span style={{color:"violet"}}>shopping cart functionality.</span>"</p>
        </div>
        <div className="project2">
            <img src="https://global-uploads.webflow.com/625d567276661e857102867d/63cd55af57b94e9886e36427_A%20Beginners%20Guide%20to%20Employee%20Management%20System.png" alt="error" width={400} height={250} />
            <h2><span style={{color:"violet"}}>Employee DBMS.</span></h2>
            <p>"An Employee Database System leveraging <span style={{color:"violet"}}>Spring Boot and MySQL on the backend</span>, offering scalability, <span style={{color:"violet"}}>security, and seamless data management</span>. Combined with <span style={{color:"violet"}}>ReactJS on the frontend</span>, we deliver a <span style={{color:"violet"}}>user-friendly interface</span> for efficient HR operations and enhanced employee engagement."</p>
        </div>
        <div className="project3">
            <img src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1" alt="error" width={400} height={250} />
            <h2><span style={{color:"violet"}}>Portfolio</span></h2>
            <p>"I've crafted my portfolio using <span style={{color:"violet"}}>ReactJS, featuring a seamless blend of skills, projects, an 'About' section</span>, and comprehensive information to showcase my expertise and experiences in web development and designed to showcase an individual's skills, expertise, and <span style={{color:"violet"}}>unique approach towards my skills"</span></p>
        </div>
        <div className="project4">
            <img src="https://s3-alpha.figma.com/hub/file/3568263615/0d93ccf5-00ce-4a33-99ae-4cafcbc5db19-cover.png" alt="error" width={400} height={250} />
                  <h2><span style={{color:"violet"}}>Pomodoro Clock using JS</span></h2>
                  <p>"This Pomodoro Clock is a valuable tool for enhancing <span style={{color:"violet"}}>time management skills, promoting focus, and breaking tasks into manageable intervals,</span> ultimately boosting productivity and efficiency in various <span style={{color:"violet"}}>personal and professional endeavors.</span>"</p>
        </div>
        </div>
        </>
    )
};
export default Projects;
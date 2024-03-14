import axios from "axios";
import "./Skills.css"
const Skills=()=>{
    return(
        <>
        <h2>SKILLS I'M <span style={{color:"violet"}}>FLUENT</span> WITH</h2>
        <div className="skills">
        <div className="S1">
            <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="error" height={150} width={150}></img>
              <h3><span style={{color:"violet"}}>ReactJS</span></h3>
              <p>"Mastering ReactJS, seamlessly building powerful, component-driven web applications."</p>
        </div>

        <div className="S2">
            <img src="https://www.svgrepo.com/show/376337/node-js.svg" alt="error" height={150} width={150}></img>
              <h3><span style={{color:"violet"}}>NodeJS</span></h3>
              <p>"Proficient in Node.js, adeptly crafting scalable and efficient server-side applications.And can adept at making REST API calls using Node.js for seamless integration and data exchange.""</p>
        </div>

        <div className="s3">
            <img src="https://w7.pngwing.com/pngs/172/554/png-transparent-javascript-html-computer-software-web-browser-watermark-angle-text-rectangle.png" alt="error" height={150} width={150}></img>
              <h3><span style={{color:"violet"}}>javascript</span></h3>
              <p>"Skilled in JavaScript, adeptly harnessing its power to create dynamic and interactive web applications."</p>
        </div>

        <div className="s4">
            <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="error" height={150} width={150}></img>
              <h3><span style={{color:"violet"}}>HTML</span></h3>
              <p>"Proficient in HTML, skillfully crafting structured and accessible web content for diverse user experiences."</p>
        </div>

        <div className="s5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="error" height={150} width={150}></img>
              <h3><span style={{color:"violet"}}>CSS</span></h3>
              <p>"Proficient in CSS, adeptly styling web content to create visually stunning and responsive user interfaces."</p>
        </div>

        <div className="s6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="error" height={150} width={150}></img>
              <h3><span style={{color:"violet"}}>BootStrap</span></h3>
              <p>"Proficient in Bootstrap, leveraging its framework to rapidly develop sleek and responsive web applications."</p>
        </div>

        <div className="s7">
            <img src="https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png" alt="error" height={150} width={150}></img>
              <h3><span style={{color:"violet"}}>SpringBoot</span></h3>
              <p>"Proficient in Spring Boot, adeptly integrating security measures and implementing microservices architecture for resilient and secure Java applications."</p>
        </div>

        <div className="s8">
            <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg" alt="error" height={150} width={150}></img>
              <h3><span style={{color:"violet"}}>JAVA</span></h3>
              <p>"Skilled in core Java fundamentals, proficiently mastering the building blocks of object-oriented programming for software development."</p>
        </div>

        <div className="s9">
            <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="error" height={150} width={150}></img>
              <h3><span style={{color:"violet"}}>MongoDB</span></h3>
              <p class="card-text">"Proficient in MongoDB, adeptly harnessing its flexibility and scalability to manage and query NoSQL databases for modern applications."</p>
        </div>

        <div className="s10">
            <img src="https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png" alt="error" height={150} width={150}></img>
              <h3><span style={{color:"violet"}}>MYSQL</span></h3>
              <p>"Proficient in MySQL, adeptly managing relational databases to store, retrieve, and manipulate data for diverse applications and systems."</p>
        </div>
    </div>
        </>
    )
};
export default Skills;
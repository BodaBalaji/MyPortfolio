import axios from "axios";
import "./Home.css";
const Home=()=>{
    return(
        <>
         <div className="parent">
            <div className="child1">
                <p>Hi There..!👋🏻</p>
            <h2>I'M BODA BALAJI</h2>
            <p>A passionate <span className="c1"> Full Stack Developer/MERN Stack Developer</span> from Hyderabad.</p>
            </div>
            <div className="child2">
                <img src="https://kesare.s3.ap-south-1.amazonaws.com/bodabalaji.jpg" alt="error"/>
            </div>
        </div>
        <footer className="sm">
            <h2>CONNECT WITH ME ON</h2>
            <div>
                <a href="https://github.com/BodaBalaji/MyPortfolio" target="_blank"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/boda-balaji-684930285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="https://www.instagram.com/balajirysh?igsh=MXcwcDFhemZkMHU3eQ==" target="_blank"><i className="fa fa-instagram"></i></a>
            <a href="https://x.com/balajiboda2208?t=WHJRQTeOfP25af3h36eeBA&s=09" target="_blank"><i className="fa fa-twitter"></i></a>
         </div>
         <div>
            <p>Made with <span style={{color:"red"}}> ❤</span> by Boda Balaji</p>
         </div>
        </footer>
        </>
    )
};
export default Home;
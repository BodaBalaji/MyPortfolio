import axios from "axios";
import "./Home.css";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
const Home=()=>{

    const typedRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: [
          'Frontend Developer',
          'Full Stack Developer',
          'MERN Stack Developer',
           'Software Developer'
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      };
  
      typedRef.current = new Typed('.c1', options);
  
      return () => {
        typedRef.current.destroy();
      };
    }, []);
    return(
        <>
         <div className="parent">
            <div className="child1">
                <p>Hi There..! <span className="wave">👋🏻</span></p>
            <h2 className="child3">I'M BODA BALAJI</h2>
            <p>A passionate<br />
                <span className="c1"></span> <br />
                from Hyderabad.</p>
                <a className="ch1" href="mailto:balajiboda2208@gmail.com">
               <button style={{backgroundColor:"green", padding:"10px"}}><i className="fa fa-envelope"> Mail Me</i></button></a>
               <a href="https://www.linkedin.com/in/boda-balaji-684930285/" className="ch2" target="_blank"><button style={{backgroundColor:"orange",padding:"10px"}}><i className="fa fa-user"> LinkedIn</i></button></a>
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
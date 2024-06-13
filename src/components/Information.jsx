import React, { useState,useRef } from "react";
import "./Information.css";
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ onClose }) => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y5633oq', 'template_9lsvluw', form.current, 'Oi8dE1Oh_0YrHMuxV')
      .then((result) => {
          console.log(result.text);
          alert("Thankyou..! Your response has been stored.. I'll get back to you soon..!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to Send Message");
      });
  };

  return (
    <div className="login-form-overlay">
      <div className="login-form-container">
        <h2>Contact Me</h2>
        <form  ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="username">FirstName</label>
            <input type="text" id="firstname" name="firstname" placeholder="Enter your firstname" required />
          </div>
          <div>
            <label htmlFor="username">LastName</label>
            <input type="text" id="lastname" name="lastname" placeholder="Enter your lastname" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="from_email" placeholder="Enter your email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="  Enter your message/mobile number/etc.." style={{width:"400px", height:"80px", borderRadius:"10px"}}></textarea>
          </div>
          <div>
            <button type="submit" style={{backgroundColor:"green"}}>submit</button>
            <button type="button" onClick={onClose} style={{backgroundColor:"orange"}}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Information = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();

  const hire_me = () => {
    setShowLoginForm(true);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <div className="inf1">
        <h2>
          <span style={{ color: "violet" }}>Personal Details</span>
        </h2>
        <p>Name : Boda Balaji</p>
        <p>Father Name : Boda Venkateswarlu</p>
        <p>D-O-B : 22/08/2000</p>
        <p>Gender : Male</p>
        <br />
        <p>
          Wanna Know <span style={{ color: "violet" }}>more about me</span>..,
          Then click on <span style={{ color: "violet" }}>Resume</span>..!
        </p>
        <br />
        <button className="b1" onClick={hire_me}>
          Hire me
        </button>{" "}
        <button className="b2">
          <a
            href="https://balajiaws.s3.ap-south-1.amazonaws.com/Boda_Balaji_Resume%5B02%5D.pdf"
            target="_blank">
            Resume
          </a>
        </button>
      </div>
      <div className="inf2">
        <div>
          <h2>
            FOLLOW <span style={{ color: "violet" }}>ME</span> ON{" "}
          </h2>
          <a
            href="https://github.com/BodaBalaji/MyPortfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/boda-balaji-684930285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/balajirysh?igsh=MXcwcDFhemZkMHU3eQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://x.com/balajiboda2208?t=WHJRQTeOfP25af3h36eeBA&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div>
          <p>
            Made with <span style={{ color: "red" }}> ❤</span> by Boda Balaji
          </p>
        </div>
      </div>
      {showLoginForm && <LoginForm onClose={closeLoginForm} />}
    </>
  );
};

export default Information;























// import React from "react";
// import "./Information.css";
// import {Link, useNavigate} from "react-router-dom";

//   const Information=()=>{
//     const hire_me=()=>{
//     }
//     const navigate=useNavigate();
//     return(
//         <>
//        <div className="inf1">
//         <h2><span style={{color:"violet"}}>Personal Details</span></h2>
//         <p>Name        :  Boda Balaji</p>
//         <p>Father Name :  Boda Venkateswarlu</p>
//         <p>D-O-B       :  22/08/2000</p>
//         <p>Gender      :  Male</p>
//         <br />
//         <p>Wanna Know <span style={{color:"violet"}}>more about me</span>.., Then click on <span style={{color:"violet"}}>Resume</span>..!</p>
//         <br />
//         <button className="b1" onClick={hire_me}>Hire me</button> <button className="b2"><a href="https://balajiaws.s3.ap-south-1.amazonaws.com/Boda_Balaji_Resume%5B02%5D.pdf" target="_blank">Resume</a></button>
//                </div>
//              <div className="inf2">
//             <div >
//                 <h2>FOLLOW <span style={{color:"violet"}}>ME</span> ON </h2>
//                 <a href="https://github.com/BodaBalaji/MyPortfolio" target="_blank"><i className="fa fa-github"></i></a>
//             <a href="https://www.linkedin.com/in/boda-balaji-684930285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="fa fa-linkedin"></i></a>
//             <a href="https://www.instagram.com/balajirysh?igsh=MXcwcDFhemZkMHU3eQ==" target="_blank"><i className="fa fa-instagram"></i></a>
//             <a href="https://x.com/balajiboda2208?t=WHJRQTeOfP25af3h36eeBA&s=09" target="_blank"><i className="fa fa-twitter"></i></a>
//          </div>
//          <div>
//             <p>Made with <span style={{color:"red"}}> ❤</span> by Boda Balaji</p>
//          </div>
//          </div>
//         </>
//     )
// };
// export default Information; 
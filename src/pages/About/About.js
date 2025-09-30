import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import profilePic from "../../assets/docs/vikasphoto.jpg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
              /> */}
              <img src={profilePic} alt="profile pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hi, I’m Vikas! I’m a web developer who loves creating modern, responsive, and user-friendly applications.
                 I’ve worked with technologies like MERN, Laravel, and AEM, and I enjoy turning ideas into real projects that
                  make an impact. I’m always learning, experimenting, and building — because for me, coding is both a career and
                   a passion.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
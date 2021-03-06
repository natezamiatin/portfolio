import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Projects from "./Projects";



class About extends Component {

    constructor() {
    super();
    this.state = {
      skills: [
          "JavaScript",
          "React",
          "React Native",
          "HTML & CSS",
          "Node.js",
          "Express",
          "AJAX",
          "SQL",
          "Heroku",
          "Firebase",
          "AWS",
          "Docker",
          "WebPack",
          "UI / UX",
          "Git",
          "Visual Studio Code",
          "Atom"
      ]
    }

  }
  render (){
      return (
          <div className="about">
        <Projects />
       
          <Row className="skills">
            <Col sm="12" className="">
                <h2>Skills</h2>
            <Row>
            {this.state.skills.map(skill=>{
                return (
               <li key={skill}>{skill}</li>
                )
            })}
            </Row>
            </Col>
          </Row>
          <hr/>
          <br/>
          <Row className="contact">
        
            <Col >
            <h1>Full Stack Developer & Designer in New York City, NY </h1></Col>
             <Col>
             <h2 style={{textAlign:'center'}}>Contact me </h2>
              <hr/>
             {/* <p>I am currently looking for full time employment and would love to hear from you.</p> */}
             <a href="mailto:nickzamiatin@gmail.com">nickzamiatin@gmail.com</a>
             <br/>
             <h3><a href="https://www.linkedin.com/in/nick-zamiatin-17bb04156/">LinkedIn</a></h3>
             <br/>
              <h3><a href="https://github.com/NickZamiatin">GitHub</a></h3>
             </Col>
             </Row>
       
     </div>
    )
}
}


export default About
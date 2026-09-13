import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiScikitlearn, SiTensorflow, SiNumpy, SiPandas, SiFastapi, SiSpringboot, SiFlask } from "react-icons/si";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow fontSize="24px" color="#FF6F00" />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn fontSize="24px" color="#F0922B" />
        <div className="tech-icons-text">Scikit-Learn</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy fontSize="24px" color="#4DABCF" />
        <div className="tech-icons-text">NumPy</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPandas fontSize="24px" color="#150458" />
        <div className="tech-icons-text">Pandas</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFlask fontSize="24px" />
        <div className="tech-icons-text">Flask</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi fontSize="24px" color="#009688" />
        <div className="tech-icons-text">FastAPI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot fontSize="24px" color="#6DB33F" />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="Kubernetes" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt="Go" />
        <div className="tech-icons-text">Go</div>
      </Col>
    </Row>
  );
}

export default Techstack;

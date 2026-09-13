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

const iconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid var(--color-border)",
  backgroundColor: "var(--color-card)",
  transition: "all 0.2s ease",
  cursor: "pointer",
  width: "fit-content",
  minWidth: "120px",
};

const textStyle = {
  marginLeft: "10px",
  fontFamily: "var(--font-mono)",
  fontSize: "0.8rem",
  color: "var(--color-muted-foreground)",
};

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", gap: "12px" }}>
      {[
        { src: Python, alt: "Python" },
        { src: Java, alt: "Java" },
        { src: C, alt: "C++" },
        { src: Javascript, alt: "JavaScript" },
        { src: SQL, alt: "SQL" },
        { icon: <SiTensorflow fontSize="20px" color="#FF6F00" />, alt: "TensorFlow" },
        { icon: <SiScikitlearn fontSize="20px" color="#F0922B" />, alt: "Scikit-Learn" },
        { icon: <SiNumpy fontSize="20px" color="#4DABCF" />, alt: "NumPy" },
        { icon: <SiPandas fontSize="20px" color="#150458" />, alt: "Pandas" },
        { icon: <SiFlask fontSize="20px" />, alt: "Flask" },
        { icon: <SiFastapi fontSize="20px" color="#009688" />, alt: "FastAPI" },
        { icon: <SiSpringboot fontSize="20px" color="#6DB33F" />, alt: "Spring Boot" },
        { src: ReactIcon, alt: "React.js" },
        { src: Node, alt: "Node.js" },
        { src: Mongo, alt: "MongoDB" },
        { src: Docker, alt: "Docker" },
        { src: Kubernates, alt: "Kubernetes" },
        { src: AWS, alt: "AWS" },
        { src: Git, alt: "Git" },
        { src: Go, alt: "Go" },
      ].map((item, idx) => (
        <Col xs={6} md={4} lg={3} key={idx} style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
          <div
            style={iconStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {item.src ? <img src={item.src} alt={item.alt} style={{ height: "20px" }} /> : item.icon}
            <span style={textStyle}>{item.alt}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

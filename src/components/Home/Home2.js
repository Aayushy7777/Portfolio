import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2em", fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}>
              <span style={{ color: "var(--color-accent)" }}>const</span> aboutMe = () =&gt;
            </h1>
            <p className="home-about-body" style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--color-muted-foreground)" }}>
              I'm a final-year AI & Data Science undergraduate and aspiring
              <span style={{ color: "var(--color-accent)" }}> AI & Data Engineer </span>
              who enjoys building intelligent data pipelines and scalable machine learning systems.
            </p>
            <p className="home-about-body" style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--color-muted-foreground)" }}>
              I work mainly with{" "}
              <span style={{ color: "var(--color-foreground)", fontWeight: 600 }}>
                Python, Java, SQL, TensorFlow, Scikit-Learn, and Pandas
              </span>{" "}
              along with{" "}
              <span style={{ color: "var(--color-foreground)", fontWeight: 600 }}>
                PostgreSQL, MySQL, MongoDB, and Docker
              </span>{" "}
              for building end-to-end data solutions.
            </p>
            <p className="home-about-body" style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--color-muted-foreground)" }}>
              My key areas of interest include{" "}
              <span style={{ color: "var(--color-foreground)", fontWeight: 600 }}>
                machine learning, deep learning, data engineering, and NLP-powered applications
              </span>{" "}
              where I can leverage clean data architecture to solve real-world problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "12px",
                  border: "2px solid var(--color-border)",
                  maxWidth: "280px",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

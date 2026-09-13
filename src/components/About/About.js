import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

const publicHeadshot = process.env.PUBLIC_URL + "/headshot.jpg";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2em", paddingBottom: "20px", fontFamily: "var(--font-mono)" }}>
                <span style={{ color: "var(--color-accent)" }}>01.</span>{" "}
                <span style={{ color: "var(--color-foreground)" }}>About Me</span>
              </h1>
              <Aboutcard />
            </Col>

            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img
                src={publicHeadshot}
                alt="Aayush Yadav headshot"
                className="img-fluid"
                style={{
                  borderRadius: "12px",
                  border: "2px solid var(--color-border)",
                  maxWidth: "300px",
                }}
              />
            </Col>
          </Row>

          <h1 className="project-heading" style={{ fontFamily: "var(--font-mono)" }}>
            <span style={{ color: "var(--color-accent)" }}>02.</span>{" "}
            <span style={{ color: "var(--color-foreground)" }}>Tech Stack</span>
          </h1>
          <Techstack />

          <h1 className="project-heading" style={{ fontFamily: "var(--font-mono)" }}>
            <span style={{ color: "var(--color-accent)" }}>03.</span>{" "}
            <span style={{ color: "var(--color-foreground)" }}>Tools</span>
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;

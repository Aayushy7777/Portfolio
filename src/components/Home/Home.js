import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--color-accent)" }}>
                Hi, my name is
              </h1>
              <h1 className="heading-name" style={{ fontSize: "3.5em", fontWeight: 700, color: "var(--color-foreground)" }}>
                Aayush <strong style={{ color: "var(--color-accent)" }}>Yadav</strong>.
              </h1>
              <div style={{ padding: "30px 0", textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-muted-foreground)", marginBottom: "15px" }}>
              Find me on
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:aayush09204@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-muted-foreground)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Aayushy7777"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-muted-foreground)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aayushyadav7777/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-muted-foreground)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

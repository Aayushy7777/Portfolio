import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ backgroundColor: "var(--color-primary)", borderTop: "1px solid var(--color-border)" }}>
      <Row style={{ alignItems: "center", padding: "15px 0" }}>
        <Col md="4" className="footer-copywright" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-muted-foreground)", margin: 0 }}>
            Built by Aayush Yadav
          </p>
        </Col>
        <Col md="4" className="footer-copywright" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-muted-foreground)", margin: 0 }}>
            Copyright &copy; {year}
          </p>
        </Col>
        <Col md="4" className="footer-body" style={{ textAlign: "center" }}>
          <ul className="footer-icons" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", justifyContent: "center", gap: "20px" }}>
            <li>
              <a
                href="https://github.com/Aayushy7777"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-muted-foreground)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-accent)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-foreground)"}
              >
                <AiFillGithub size={18} />
              </a>
            </li>
            <li>
              <a
                href="mailto:aayush09204@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-muted-foreground)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-accent)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-foreground)"}
              >
                <AiOutlineMail size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aayushyadav7777/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-muted-foreground)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-accent)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-foreground)"}
              >
                <FaLinkedinIn size={18} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

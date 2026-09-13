import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineBriefcase } from "react-icons/hi";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "navbar navbar-sticky" : "navbar"}
      style={{
        backgroundColor: navColour ? "rgba(15, 23, 42, 0.95)" : "transparent",
        backdropFilter: navColour ? "blur(12px)" : "none",
        borderBottom: navColour ? "1px solid var(--color-border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <Container>
        <Navbar.Brand href="/" style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "1.2rem", color: "var(--color-accent)" }}>
          &lt;AY /&gt;
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
          style={{ borderColor: "var(--color-border)" }}
        >
          <span style={{ backgroundColor: "var(--color-accent)" }}></span>
          <span style={{ backgroundColor: "var(--color-accent)" }}></span>
          <span style={{ backgroundColor: "var(--color-accent)" }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-muted-foreground)" }}>
                <AiOutlineHome style={{ marginBottom: "2px", marginRight: "4px" }} /> home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)} style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-muted-foreground)" }}>
                <AiOutlineUser style={{ marginBottom: "2px", marginRight: "4px" }} /> about
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)} style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-muted-foreground)" }}>
                <CgFileDocument style={{ marginBottom: "2px", marginRight: "4px" }} /> resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)} style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-muted-foreground)" }}>
                <HiOutlineBriefcase style={{ marginBottom: "2px", marginRight: "4px" }} /> projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Aayushy7777"
                target="_blank"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-muted-foreground)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "4px",
                  transition: "all 0.2s ease",
                }}
              >
                <CgGitFork style={{ fontSize: "1em", marginRight: "4px" }} />
                <AiFillStar style={{ fontSize: "0.9em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

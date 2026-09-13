import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import projects from "../../content/projects.json";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ fontFamily: "var(--font-mono)" }}>
          <span style={{ color: "var(--color-accent)" }}>04.</span>{" "}
          <span style={{ color: "var(--color-foreground)" }}>Projects</span>
        </h1>
        <p style={{ color: "var(--color-muted-foreground)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", marginBottom: "40px" }}>
          // things I've built recently
        </p>

        <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative", paddingLeft: "28px" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute",
            left: "0",
            top: "0",
            bottom: "0",
            width: "2px",
            background: "linear-gradient(to bottom, var(--color-accent), var(--color-border))",
          }} />

          {projects.map((project, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                marginBottom: idx < projects.length - 1 ? "32px" : "0",
                paddingBottom: "32px",
                borderBottom: idx < projects.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: "absolute",
                left: "-34px",
                top: "4px",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "var(--color-accent)",
                border: "2px solid var(--color-background)",
              }} />

              {/* Number */}
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--color-accent)",
                marginBottom: "8px",
                opacity: 0.7,
              }}>
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "var(--color-foreground)",
                marginBottom: "6px",
              }}>
                {project.title}
              </h3>

              {/* Dates */}
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--color-muted-foreground)",
                marginBottom: "12px",
              }}>
                {project.dates}
              </div>

              {/* Description */}
              <p style={{
                color: "var(--color-muted-foreground)",
                fontSize: "0.95rem",
                lineHeight: 1.65,
                marginBottom: "14px",
              }}>
                {project.description}
              </p>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    backgroundColor: "var(--color-accent-dim)",
                    color: "var(--color-accent)",
                    border: "1px solid rgba(34, 197, 94, 0.2)",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "16px" }}>
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--color-muted-foreground)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-accent)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-foreground)"}
                  >
                    <AiOutlineGithub size={14} /> Source
                  </a>
                )}
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--color-muted-foreground)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-accent)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-foreground)"}
                  >
                    <FiExternalLink size={12} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;

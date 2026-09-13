import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import experience from "../../content/experience.json";
import profile from "../../content/profile.json";

const pdf = "/AayushResume.pdf";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <h1 className="project-heading" style={{ fontFamily: "var(--font-mono)", textAlign: "center" }}>
            <span style={{ color: "var(--color-accent)" }}>05.</span>{" "}
            <span style={{ color: "var(--color-foreground)" }}>Experience</span>
          </h1>

          {/* Timeline */}
          <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative", paddingLeft: "28px" }}>
            <div style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "2px",
              background: "linear-gradient(to bottom, var(--color-accent), var(--color-border))",
            }} />

            {experience.map((job, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  marginBottom: idx < experience.length - 1 ? "40px" : "0",
                  paddingBottom: "40px",
                  borderBottom: idx < experience.length - 1 ? "1px solid var(--color-border)" : "none",
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

                {/* Dates */}
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--color-accent)",
                  marginBottom: "8px",
                }}>
                  {job.dates}
                </div>

                {/* Title & Company */}
                <h3 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "var(--color-foreground)",
                  marginBottom: "4px",
                }}>
                  {job.title}
                </h3>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  color: "var(--color-muted-foreground)",
                  marginBottom: "4px",
                }}>
                  {job.company} — {job.location}
                </div>

                {/* Highlights */}
                <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
                  {job.highlights.map((h, i) => (
                    <li key={i} style={{
                      color: "var(--color-muted-foreground)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      marginBottom: "8px",
                      paddingLeft: "4px",
                    }}>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
                  {job.tech.map((t, i) => (
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
              </div>
            ))}
          </div>

          {/* Education */}
          <h1 className="project-heading" style={{ fontFamily: "var(--font-mono)", textAlign: "center", marginTop: "60px" }}>
            <span style={{ color: "var(--color-accent)" }}>06.</span>{" "}
            <span style={{ color: "var(--color-foreground)" }}>Education</span>
          </h1>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "var(--color-foreground)", fontSize: "1.05rem", fontWeight: 500 }}>
              {profile.education}
            </p>
            <p style={{ color: "var(--color-muted-foreground)", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
              {profile.coursework}
            </p>
          </div>

          {/* Download button */}
          <Row style={{ justifyContent: "center", marginTop: "50px" }}>
            <Button
              href={pdf}
              target="_blank"
              style={{
                maxWidth: "250px",
                backgroundColor: "transparent",
                border: "1px solid var(--color-accent)",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                padding: "10px 24px",
                borderRadius: "4px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-accent)";
                e.currentTarget.style.color = "#0F172A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;

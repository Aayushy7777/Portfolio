import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

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

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", gap: "12px" }}>
      {[
        { src: vsCode, alt: "VS Code" },
        { src: intelliJ, alt: "IntelliJ IDEA" },
        { src: chrome, alt: "Google Chrome" },
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
            <img src={item.src} alt={item.alt} style={{ height: "20px" }} />
            <span style={textStyle}>{item.alt}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

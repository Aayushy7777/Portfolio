import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import profile from "../../content/profile.json";

function AboutCard() {
  const name = profile.name || "Aayush";
  const location = profile.location || "Mumbai";
  const title = profile.currentTitle || "Full-Stack Developer";
  const company = profile.currentCompany || "Your Company";
  const education = profile.education || "Your Degree — University";
  const summary =
    profile.summary ||
    "I build responsive web apps using React and Node. I enjoy designing scalable systems and shipping delightful user experiences.";
  const hobbies = profile.hobbies || ["Coding", "Writing", "Traveling"];
  const quote = profile.quote || "Strive to build things that make a difference!";

  return (
    <Card className="quote-card-view" style={{ backgroundColor: "transparent", border: "none" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "var(--color-muted-foreground)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Hi everyone! I'm <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>{name}</span> from{" "}
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>{location}</span>.
            <br />
            I'm currently working as a{" "}
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>{title}</span> at{" "}
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>{company}</span>.
            <br />
            <span style={{ color: "var(--color-foreground)" }}>{education}</span>
            <br />
            <br />
            {summary}
          </p>

          <ul style={{ marginTop: "20px" }}>
            {hobbies.map((hobby, idx) => (
              <li key={idx} className="about-activity" style={{ color: "var(--color-muted-foreground)", marginBottom: "8px" }}>
                <ImPointRight style={{ color: "var(--color-accent)", marginRight: "8px" }} /> {hobby}
              </li>
            ))}
          </ul>

          <p style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontSize: "0.9rem", marginTop: "20px" }}>
            "{quote}"
          </p>
          <footer className="blockquote-footer" style={{ color: "var(--color-muted-foreground)" }}>
            {name.split(" ")[0]}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

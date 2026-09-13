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
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I&apos;m <span className="purple">{name}</span> from{" "}
            <span className="purple">{location}</span>.
            <br />
            I&apos;m currently working as a{" "}
            <span className="purple">{title}</span> at{" "}
            <span className="purple">{company}</span>.
            <br />
            {education}
            <br />
            <br />
            {summary}
          </p>

          <ul>
            {hobbies.map((hobby, idx) => (
              <li key={idx} className="about-activity">
                <ImPointRight /> {hobby}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            &quot;{quote}&quot;
          </p>
          <footer className="blockquote-footer">
            {name.split(" ")[0]}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

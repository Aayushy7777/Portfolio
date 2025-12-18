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
<h1 style={{ fontSize: "2.6em" }}>
LET ME <span className="purple"> INTRODUCE </span> MYSELF
</h1>
<p className="home-about-body">
I’m a final-year AI & Data Science undergraduate and full‑stack
developer who enjoys turning ideas into reliable, scalable web
applications and data‑driven solutions.




I work mainly with{" "}
<i>
<b className="purple">
Java, Spring Boot, JavaScript / TypeScript, React, and Vue
</b>
</i>{" "}
along with{" "}
<i>
<b className="purple">
REST APIs, PostgreSQL, MySQL, and MongoDB
</b>
</i>{" "}
for building end‑to‑end systems.




My key areas of interest include{" "}
<i>
<b className="purple">
backend engineering, data analytics, and AI/ML‑powered
applications
</b>
</i>{" "}
where I can use clean architecture and good data design to solve
real problems.




Whenever possible, I love building projects with{" "}
<b className="purple">Spring Boot</b> and modern frontend stacks
like{" "}
<i>
<b className="purple">React.js</b> and{" "}
<b className="purple">Vue.js</b>, and integrating dashboards
and analytics using tools like{" "}
<b className="purple">Python and Power BI</b>.
</i>
</p>
</Col>
<Col md={4} className="myAvtar">
<Tilt>
<img src={myImg} className="img-fluid" alt="avatar" />
</Tilt>
</Col>
</Row>
</Container>
</Container>
);
}

export default Home2;
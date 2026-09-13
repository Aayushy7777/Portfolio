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
I'm a final-year AI & Data Science undergraduate and aspiring
AI & Data Engineer who enjoys building intelligent data
pipelines and scalable machine learning systems.


I work mainly with{" "}
<i>
<b className="purple">
Python, Java, SQL, TensorFlow, Scikit-Learn, and Pandas
</b>
</i>{" "}
along with{" "}
<i>
<b className="purple">
PostgreSQL, MySQL, MongoDB, and Docker
</b>
</i>{" "}
for building end-to-end data solutions.


My key areas of interest include{" "}
<i>
<b className="purple">
machine learning, deep learning, data engineering, and
NLP-powered applications
</b>
</i>{" "}
where I can leverage clean data architecture to solve
real-world problems.


Whenever possible, I love building projects with{" "}
<b className="purple">TensorFlow</b> and{" "}
<b className="purple">Scikit-Learn</b>, deploying APIs
with{" "}
<i>
<b className="purple">Flask, FastAPI, and Spring Boot</b>,
and visualizing insights using{" "}
<b className="purple">Power BI and Matplotlib</b>.
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
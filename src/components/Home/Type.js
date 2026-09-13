import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI & Data Engineer",
          "Machine Learning Practitioner",
          "Full-Stack Developer",
          "Data Pipeline Architect",
          "Spring Boot & FastAPI Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

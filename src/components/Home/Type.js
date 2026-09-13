import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
return (
<Typewriter
options={{
strings: [
"Full-Stack Developer",
"AI & Data Science Undergraduate",
"Spring Boot & React Developer",
"Backend & REST API Engineer",
"Data & Analytics Enthusiast",
],
autoStart: true,
loop: true,
deleteSpeed: 50,
}}
/>
);
}

export default Type;
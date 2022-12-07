import React from 'react';
import coverImage from "../assets/images/hydrangea-bg.jpeg";

function About() {
  return (
    <section className="my-5">
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <h1 id="about">My name is Alexus and I'm a web developer located in Roseville, California. Currently, I work at a tech/personal assisting startup as a Escalation Support Specialist after a year of being the top Personal Assistant in the company. Moving away from being an assistant for 20 families, to working with other developers on Q/A and product issues, being the main support for all other assistants in their day to day duties, as well as creating a knowledge database for policies and best practices, to now being a web developer, proves that I'm more than capable of wearing many different hats</h1>
    </section>
  );
}

export default About;

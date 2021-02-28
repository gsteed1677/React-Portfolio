import React from "react";
import me from "../assets/linkedin-photo.png";
import resume from "../assets/Garrett Steed Resume 2020.pdf";

function Home() {
  return (
    <div>
      <div className="columns">
        <div className="column is-1"></div>
        <p className="column">
          A sales driven SaaS professional with current knowledge of Enterprise sales and needs, analytics/application markets and the current innovations underway across different channels and networks. Adaptable and experienced with selling a wide variety of products with a proven track record of success across the full sale cycle. Consistently meets and exceeds corporate sales goals, while also maintaining customer relations, generating leads, closing deals, and utilizing SFDC skills. 
          <br />
          <br />
          I am currently in the Denver University Full Stack bootcamp, but will be finished by March 2021. <br />
          <br />
        </p>
        <div className="column is-1"></div>
      </div>

      <div className="column is-full has-text-centered">
        <img src={me} alt="Garrett"></img>
        <br></br>
        <a href="https://github.com/gsteed1677" target="blank">
          Github
        </a>
        <br />
        <a href={resume} target="blank">
          Resume
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/garrett-steed/"
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Home;
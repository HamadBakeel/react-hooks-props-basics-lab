import React from "react";
import Links from './Links'
function About({bio = "", github, linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
        {
            bio.length >0 && <p>{bio}</p>
        }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
        <Links linkedin={linkedin} github={github}/>
    </div>
  );
}

export default About;

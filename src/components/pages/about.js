import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      Jacob Larsson is a software web developer, with extensive background in PC hardware and software repair. His background in software, hardware, and website development create his experienced and outward thinking approach to projects.  Jacob is fueled by his passion for computers and a desire to continually learn and create new things. He considers himself a ‘forever student,’ eager to both build on his academic foundations in software development and stay in tune with the latest computer software and hardware strategies through continued coursework.
His hunger for knowledge and determination to turn information into action has contributed to his most recent success at Bottega Technical College, where he worked towards learning the latest in technology and grew his skills to become a professional web developer in one of today's fastest growing fields.  
Jacob believes mindfulness in the workplace is key to success - a tenet he  lives out through his interests in music, weight training, and family. Jacob is currently working as a part of a professional technician team and is always interested in a challenge. Reach out to jacoblarslarsson@gmail.com to connect!

      </div>
    </div>
  );
}
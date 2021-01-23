import React from 'react';
import { Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';

const About = () => (
  <div id="about">
    <Fade ssrFadeout top>
      <h3 className="title text-primary">About me</h3>
      <hr className="text-primary description mb-0" />
    </Fade>
    <Fade ssrFadeout top>
      <h5 className="description text-primary">
        Versatile Frontend web developer with 2+ years of experience developing,
        managing, and maintaining simple to complex websites and dashboard
        admins. Specializes in ReactJS and responsive design.
      </h5>
    </Fade>
    <div className="text-center w-100">
      <Button
        className="btn-round"
        color="primary"
        size="lg"
        onClick={() => {
          if (process.browser) {
            window.open('/images/cv-ahmadandika2.pdf');
          }
        }}
      >
        Download My Resume
      </Button>
    </div>
  </div>
);

export default About;

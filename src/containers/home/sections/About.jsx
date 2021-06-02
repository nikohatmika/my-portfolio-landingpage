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
        I am a detail oriented and self-motivated IT-Focused Project Manager
        with advanced education in both bussiness administration and computer
        science.
      </h5>
    </Fade>
    <div className="text-center w-100">
      <Button
        className="btn-round"
        color="primary"
        size="lg"
        onClick={() => {
          if (process.browser) {
            window.open('/images/my-resume.pdf');
          }
        }}
      >
        Download My Resume
      </Button>
    </div>
  </div>
);

export default About;

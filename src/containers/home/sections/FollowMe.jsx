import React, { useState } from 'react';
import { Button, UncontrolledTooltip, Collapse } from 'reactstrap';

const FollowMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="button-container">
        <Button
          className="btn-round mb-0"
          color="primary"
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Follow My Socials
        </Button>
        <Collapse isOpen={isOpen}>
          <Button
            className="btn-round btn-icon"
            color="primary"
            id="tooltip340339231"
            size="lg"
            onClick={() => {
              window.open('https://www.instagram.com/yun.yunai');
            }}
          >
            <i className="fab fa-instagram" />
          </Button>
          <UncontrolledTooltip delay={0} target="tooltip340339231">
            Follow me on Instagram
          </UncontrolledTooltip>
          <Button
            className="btn-round btn-icon"
            color="primary"
            id="tooltip340339233"
            size="lg"
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/eko-sri-wahyuni-270695/'
              );
            }}
          >
            <i className="fab fa-linkedin" />
          </Button>
          <UncontrolledTooltip delay={0} target="tooltip340339233">
            Follow me on Linkedin
          </UncontrolledTooltip>
        </Collapse>
      </div>
    </>
  );
};

export default FollowMe;

import React from 'react';
import Fade from 'react-reveal/Fade';
import { Progress, Container, Row, Col } from 'reactstrap';

// core components

const Skill = () => (
  <>
    <div className="" id="skills">
      <Fade ssrFadeout top>
        <h3 className="title text-primary">Skills</h3>
        <Container>
          <Row>
            <Col md="6">
              <div className="progress-container progress-success">
                <span className="progress-badge ">HTML</span>
                <Progress max="100" value="90">
                  <span className="progress-value">80%</span>
                </Progress>
              </div>
              <div className="progress-container progress-success">
                <span className="progress-badge">CSS</span>
                <Progress max="100" value="75">
                  <span className="progress-value">75%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">JavaScript</span>
                <Progress max="100" value="85">
                  <span className="progress-value">85%</span>
                </Progress>
              </div>
              <div className="progress-container progress-success">
                <span className="progress-badge">TypeScript</span>
                <Progress max="100" value="70">
                  <span className="progress-value">70%</span>
                </Progress>
              </div>
            </Col>
            <Col md="6">
              <div className="progress-container progress-info">
                <span className="progress-badge progress-info">React JS</span>
                <Progress max="100" value="90">
                  <span className="progress-value">90%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">Next JS</span>
                <Progress max="100" value="90">
                  <span className="progress-value">90%</span>
                </Progress>
              </div>
              <div className="progress-container progress-success">
                <span className="progress-badge">Bootstrap</span>
                <Progress max="100" value="80">
                  <span className="progress-value">80%</span>
                </Progress>
              </div>
              <div className="progress-container progress-success">
                <span className="progress-badge">Ionic</span>
                <Progress max="100" value="70">
                  <span className="progress-value">70%</span>
                </Progress>
              </div>
            </Col>
          </Row>
          <br />
          <div className="space" />
        </Container>
      </Fade>
    </div>
  </>
);

export default Skill;

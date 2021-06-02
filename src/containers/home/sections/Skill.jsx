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
              <div className="progress-container progress-info">
                <span className="progress-badge progress-info">
                  Poject Management
                </span>
                <Progress max="100" value="85">
                  <span className="progress-value">85%</span>
                </Progress>
              </div>

              <div className="progress-container progress-info">
                <span className="progress-badge progress-info">
                  Poject Documentation
                </span>
                <Progress max="100" value="80">
                  <span className="progress-value">80%</span>
                </Progress>
              </div>
            </Col>
            <Col md="6">
              <div className="progress-container progress-success">
                <span className="progress-badge progress-success">
                  Management Software - Trello/JIRA/XONE
                </span>
                <Progress max="100" value="75">
                  <span className="progress-value">75%</span>
                </Progress>
              </div>

              <div className="progress-container progress-danger">
                <span className="progress-badge progress-info">
                  Design - Figma/Adobe XD/Gravit Design{' '}
                </span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
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

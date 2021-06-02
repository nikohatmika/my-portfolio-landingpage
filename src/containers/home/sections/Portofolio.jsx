import React from 'react';
import { Row, Col } from 'reactstrap';
import PortofolioList from './portfolio/PortfolioList';

const Portofolio = () => (
  <>
    <Row>
      <Col className="ml-auto mr-auto mb-3" md="6">
        <h4 className="title text-center text-primary" id="portofolio">
          My Portfolio
        </h4>
      </Col>
      <PortofolioList />
    </Row>
  </>
);

export default Portofolio;

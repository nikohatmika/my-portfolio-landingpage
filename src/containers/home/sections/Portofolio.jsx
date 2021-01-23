import React from 'react';
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from 'reactstrap';
import PortofolioWeb from './portfolio/PortfolioWeb';
import PortofolioAdmin from './portfolio/PortfolioAdmin';

const Portofolio = () => {
  const [pills, setPills] = React.useState('1');

  return (
    <>
      <Row>
        <Col className="ml-auto mr-auto" md="6">
          <h4 className="title text-center text-primary" id="portofolio">
            My Portfolio
          </h4>
          <div className="nav-align-center">
            <Nav
              className="nav-pills-info nav-pills-just-icons"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  className={
                    pills === '1' ? 'bg-primary text-white mr-5' : ' mr-5'
                  }
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('1');
                  }}
                >
                  <i className="fas fa-globe" />
                  <span className="text-primary">Websites</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={pills === '2' ? 'bg-primary text-white' : ''}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('2');
                  }}
                >
                  <i className="fas fa-chart-bar" />
                  <span className="text-primary">Admins</span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Col>
        <TabContent className="gallery" activeTab={`pills${pills}`}>
          <TabPane tabId="pills1">
            <PortofolioWeb />
          </TabPane>
          <TabPane tabId="pills2">
            <PortofolioAdmin />
          </TabPane>
        </TabContent>
      </Row>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h4 className="title text-center text-primary" id="portofolio">
            My Portfolio Landingpage
          </h4>
          <div className="nav-align-center">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>Source code</div>
                  <div>
                    <a
                      href="https://github.com/nikohatmika/my-portfolio-landingpage"
                      target="_blank"
                    >
                      https://github.com/nikohatmika/my-portfolio-landingpage
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Portofolio;

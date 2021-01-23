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
          <h4 className="title text-center" id="portofolio">
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
                  className={pills === '1' ? 'active mr-5' : ' mr-5'}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('1');
                  }}
                >
                  <i className="now-ui-icons location_world" />
                  <span style={{ color: '#444' }}>Website</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={pills === '2' ? 'active' : ''}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('2');
                  }}
                >
                  <i className="now-ui-icons business_chart-bar-32" />
                  <span style={{ color: '#444' }}>Admin</span>
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
          <h4 className="title text-center" id="portofolio">
            Portfolio Source Code
          </h4>
          <div className="nav-align-center">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>My Portofolio (next js)</div>
                  <div>
                    <a
                      href="https://github.com/ahmadandika/portofolio-sandiks"
                      target="_blank"
                    >
                      https://github.com/ahmadandika/portofolio-sandiks
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

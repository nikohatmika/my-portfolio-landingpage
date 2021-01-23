/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            <i className="now-ui-icons ui-1_email-85" />{' '}
            <span>ahmad.andika212@gmail.com</span>
            <i className="now-ui-icons tech_mobile ml-3" />{' '}
            <span>085732721030</span>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

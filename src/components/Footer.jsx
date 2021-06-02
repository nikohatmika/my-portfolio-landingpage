/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright d-flex text-primary" id="copyright">
            <i className="fas fa-envelope my-auto mr-1" />{' '}
            <span>ekosriwahyuni27@gmail.com</span>
            <i className="fas fa-mobile-alt my-auto ml-3 mr-1" />{' '}
            <span>+62 82 133 144 550</span>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="bg-green text-light footer-custom">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-3 footer-item">
                <div className="footer-about">
                  <img src="/img/logo-white.webp" className="img-fluid logo" />
                  <p>
                    Agentic AI for self-learning, scalable and autonomous
                    industrial ecosystems.
                  </p>
                  <div className="footer-social mt-5">
                    <ul className="list-unstyled">
                      <li>
                        <a href="http://facebook.com">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://twitter.com">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://linkedin.com">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                <div className="f-item link footer-widget widget_nav_menu">
                  <h4 className="widget-title">Company</h4>
                  <div className="menu-company-container">
                    <ul className="list-unstyled">
                      <li className="menu-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="menu-item">
                        <a href="/about">About</a>
                      </li>
                      <li className="menu-item">
                        <a href="/domains">Domains</a>
                      </li>
                      <li className="menu-item">
                        <a href="/our-ceo">Meet Our CEO</a>
                      </li>
                      {/* <li className="menu-item">
                        <a href="/expertise">Our Expertise</a>
                      </li> */}
                      <li className="menu-item">
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                <div className="contact">
                  <h4 className="widget-title">Contact Info</h4>
                  <ul className="list-unstyled">
                    <li>
                      <div className="content">
                        <strong>Address:</strong>
                        Elile AI Corporation, 251 Little <br />
                        Falls Drive, Wilmington, DE 19808
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Email:</strong>
                        <a href="mailto:info@elile.ai">info@elile.ai</a>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Phone:</strong>
                        <a href="tel:016174707070">+1 617.470.7070</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                <div className="contact">
                  <h4 className="widget-title">Newsletter</h4>
                  <p>
                    Join our subscribers list to get the latest updates and
                    industry insights.
                  </p>
                  <div className="newsletter">
                    <form className="newsletter-form">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control"
                        name="email"
                      />
                      <button type="submit">
                        <i className="fa fa-paper-plane text-light"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-green text-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="mb-0">
                  Copyright 2025. All Rights Reserved by
                  <a href="/" className="ms-2 text-primery">
                    ELILE AI.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

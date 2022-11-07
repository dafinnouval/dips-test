import React from "react";
import { Col, FloatingLabel, Row, Form, Stack, Button } from "react-bootstrap";
import { TfiArrowTopRight } from "react-icons/tfi";

const Footer = () => {
  return (
    <section className="footer bg-yellow mt-5 py-5">
      <div className="container">
        <Row>
          <Col md={2}>
            <img src={require("../assets/images/Brand box.png")} alt="" />
          </Col>
          <Col>
            <Stack direction="horizontal" className="footer-content align-items-baseline">
              {/* <div className="text-phone">P. +62 21 858 3944</div> */}
              <div className="d-flex flex-column footer-links">
                <div className="title-links" style={{ width: "120px" }}>
                  Quick Links
                </div>
                <a href="#">SERVICES</a>
                <a href="#">WORK FLOW</a>
                <a href="#">PORTFOLIO</a>
                <a href="#">ABOUT US</a>
                <a href="#">OUR VALUE</a>
              </div>
              <div className="d-flex flex-column footer-links">
                <div className="title-links">Follow</div>
                <a href="#">facebook</a>
                <a href="#">twitter</a>
                <a href="#">instagram</a>
                <a href="#">linkedin</a>
              </div>

              <div className="d-flex flex-column footer-links">
                <div className="title-links mb-3">Sign up to our newsletter</div>
                <FloatingLabel controlId="floatingInput" label="E-MAIL" className="mb-4 d-flex">
                  <Form.Control type="email" placeholder="name@example.com" className="" />
                  <Button className="btn-yellow" variant="">
                    <TfiArrowTopRight style={{ fontSize: "55px" }} />
                  </Button>
                </FloatingLabel>
                <p>
                  This site is protected by reCAPTHCHA and the
                  <u> Google Privacy Policy</u> and <u>Terms of Service apply.</u>
                </p>
              </div>
            </Stack>

            <hr style={{ border: "1px solid #000000", opacity: "100%" }} />

            <Stack direction="horizontal">
              <p>Copyright 2022 Digital Presence Strategy - Dipstrategy - Digital Agency Jakarta</p>
              <p className="ms-auto">Privacy Policy</p>
            </Stack>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Footer;

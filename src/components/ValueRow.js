import React from "react";
import { Col, Row } from "react-bootstrap";

const ValueRow = () => {
  return (
    <section className="our-value bg-black my-5 py-5">
      <div className="container">
        <Row>
          <div className="text-title text-white mb-5 pb-5">Our Values</div>
          <Col>
            <p className="text-value">Transparency</p>
            <img src={require("../assets/images/Group 7561.png")} className="border-img-value" alt="" />
            <p className="text-value">
              The goal of Wolven D.O.O. is to get as close as possible to the ideal of a ''glass company''. <br />
              <br /> Our key to this is clear communication with our customers as well as the disclosure of our workflows and the permanent involvement of the customer in the creative processes.
            </p>
          </Col>
          <Col className="mx-155">
            <p className="text-value">Transparency</p>
            <img src={require("../assets/images/Group 7561.png")} className="border-img-value" alt="" />
            <p className="text-value">
              The goal of Wolven D.O.O. is to get as close as possible to the ideal of a ''glass company''. <br />
              <br /> Our key to this is clear communication with our customers as well as the disclosure of our workflows and the permanent involvement of the customer in the creative processes.
            </p>
          </Col>
          <Col>
            <p className="text-value">Transparency</p>
            <img src={require("../assets/images/Group 7561.png")} className="border-img-value" alt="" />
            <p className="text-value">
              The goal of Wolven D.O.O. is to get as close as possible to the ideal of a ''glass company''. <br />
              <br /> Our key to this is clear communication with our customers as well as the disclosure of our workflows and the permanent involvement of the customer in the creative processes.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ValueRow;

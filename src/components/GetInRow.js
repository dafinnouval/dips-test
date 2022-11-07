import React from "react";
import { Button, Col, FloatingLabel, Form, Row, Stack } from "react-bootstrap";
import { TfiArrowTopRight } from "react-icons/tfi";

const GetInRow = () => {
  return (
    <section className="get-in-touch">
      <div className="container">
        <Row>
          <Col className="pe-5">
            <div className="text-title mb-4 me-4">Get in Touch</div>
            <p className="text-desc-contact mb-5">
              Looking to talk to us directly, or planning an office visit? As Digital Agency, Dipstrategy start by understanding your business need to comes up with any solutions. That's why it is important for us to hear your story. When
              it come to listening to your story, we are all ears.
            </p>
            <p className="text-desc-contact mb-4">Gd. Titan lt.3, Jl. Slamet Riyadi no.7, Jakarta 13150 - Indonesia </p>
            <p className="text-contact">
              P. +62 21 858 3944
              <br />
              info@dipstrategy.co.id
            </p>
            <Stack direction="horizontal" gap={3}>
              <div className="">FACEBOOK</div>
              <div className="">TWITTER</div>
              <div className="">INSTAGRAM</div>
              <div className="">LINKEDIN</div>
            </Stack>
          </Col>
          <Col>
            <div className="bg-black p-5">
              <Form>
                <Form.Group>
                  <FloatingLabel controlId="floatingInput" label="NAME" className="mb-4 text-white">
                    <Form.Control type="text" placeholder="NAME" className="form-control-custom" />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingInput" label="EMAIL" className="mb-4 text-white">
                    <Form.Control type="email" placeholder="name@example.com" className="form-control-custom" />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingTextarea2" label="MESSAGE*" className="mb-5 text-white">
                    <Form.Control as="textarea" placeholder="Message" style={{ height: "150px" }} className="form-control-custom" />
                  </FloatingLabel>
                  <Button className="btn-yellow mb-5" variant="">
                    Submit
                    <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GetInRow;

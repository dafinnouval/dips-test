import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { TfiArrowTopRight } from "react-icons/tfi";
import Iframe from "react-iframe";

const AboutRow = () => {
  return (
    <section className="about my-5 py-5">
      <div className="container">
        <div className="text-title mb-4 me-4">About Us</div>
      </div>
      <div className="bg-about">
        <div className="container">
          <Row>
            <Col>
              <p className="text-desc text-white my-4 pt-4 pe-4">
                Hardianto is a name of person work in =digital agency based in Jakarta. Founder Novi Hardianto decided to go into business for himself, using his vast experience in software engineering and numerous ancillary fields to help
                people perfect their web presence and get seen. <br />
                <br /> In setting up the company, he was able to rely on his vast experience from previous entrepreneurial activities and therefore knows what matters
              </p>
              <Button className="btn-yellow mb-5" variant="">
                See more
                <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
              </Button>
            </Col>
            <Col>
              <Iframe url="https://www.youtube.com/embed/NvFFGnSo2-Y" width="640px" height="320px" id="" className="about-vidio" display="block" position="relative" />
            </Col>
          </Row>

          <Stack direction="horizontal" gap={3} className="mt-5 pt-5">
            <div className="text-title text-white mb-4 me-4">Our magic team</div>
            <div className="ms-auto">
              <Button className="btn-yellow" variant="">
                See more
                <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
              </Button>
            </div>
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default AboutRow;

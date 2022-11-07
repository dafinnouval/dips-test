import React from "react";
import { Card, Col, Row, Stack } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";

const TeamRow = () => {
  return (
    <section className="our-tim mb-5 pb-5">
      <div className="container">
        <Row>
          <Col>
            <p className="text-desc">
              Wolven D.O.O. is a small digital agency based in Serbia. Founder Dave McGowan decided to go into business for himself, using his vast experience in software engineering and numerous ancillary fields to help people perfect
              their web presence and get seen. <br /> <br /> In setting up the company, he was able to rely on his vast experience from previous entrepreneurial activities and therefore knows what matters
            </p>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={require("../assets/images/tim.png")} />
              <Card.Body className="bg-yellow">
                <Card.Title className="text-title-card">Kate larson</Card.Title>
                <Card.Text className="text-position-card">Director</Card.Text>
                <Card.Text>
                  <Stack direction="horizontal" gap={3}>
                    <TfiLinkedin />
                    <FaFacebookF />
                    <BsTwitter />
                  </Stack>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={require("../assets/images/tim.png")} />
              <Card.Body className="bg-yellow">
                <Card.Title className="text-title-card">Kate larson</Card.Title>
                <Card.Text className="text-position-card">Director</Card.Text>
                <Card.Text>
                  <Stack direction="horizontal" gap={3}>
                    <TfiLinkedin />
                    <FaFacebookF />
                    <BsTwitter />
                  </Stack>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={require("../assets/images/tim.png")} />
              <Card.Body className="bg-yellow">
                <Card.Title className="text-title-card">Kate larson</Card.Title>
                <Card.Text className="text-position-card">Director</Card.Text>
                <Card.Text>
                  <Stack direction="horizontal" gap={3}>
                    <TfiLinkedin />
                    <FaFacebookF />
                    <BsTwitter />
                  </Stack>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={require("../assets/images/tim.png")} />
              <Card.Body className="bg-yellow">
                <Card.Title className="text-title-card">Kate larson</Card.Title>
                <Card.Text className="text-position-card">Director</Card.Text>
                <Card.Text>
                  <Stack direction="horizontal" gap={3}>
                    <TfiLinkedin />
                    <FaFacebookF />
                    <BsTwitter />
                  </Stack>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TeamRow;

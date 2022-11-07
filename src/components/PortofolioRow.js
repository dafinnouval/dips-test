import React from "react";
import { Stack, Button, Row, Col, ListGroup } from "react-bootstrap";

import { TfiArrowLeft, TfiArrowRight, TfiArrowTopRight } from "react-icons/tfi";

const PortofolioRow = () => {
  return (
    <section className="portofolio my-5 py-5">
      <div className="container">
        <Stack direction="horizontal" gap={3}>
          <div className="text-title mb-4 me-4">PORTOFOLIO</div>
          <div className=" ms-5">
            <p className="text-desc ms-auto">Take a look at our most successful projects and see for yourself our skills and the results that speak for themselves.</p>
          </div>
          <div className="d-flex ms-3">
            <TfiArrowLeft className="me-3" />
            <TfiArrowRight />
          </div>
        </Stack>
        <Row className="my-5 py-5 align-items-center">
          <Col md={5} className="align-items-center">
            <div className="text-gray">Custom WEB Development</div>
            <div className="text-project">HANA BANK Website</div>
            <div className="text-desc-project my-4">
              <ListGroup as="ol" numbered variant="flush">
                <ListGroup.Item as="li">2017 Webby Award Winner for Best Shopping App</ListGroup.Item>
                <ListGroup.Item as="li">DSC was reportedly acquired by Unilever for $1 billion</ListGroup.Item>
                <ListGroup.Item as="li">4.8 Google Play Reviews</ListGroup.Item>
                <ListGroup.Item as="li">97% of app users would recommend the DSC app to a friend</ListGroup.Item>
              </ListGroup>
            </div>
            <Button className="btn-yellow" variant="">
              Case Study
              <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
            </Button>
          </Col>
          <Col>
            <div className="d-flex align-items-center text-end">
              <img src={require("../assets/images/Mockup Mobile Light Mode.png")} className="position-relative" style={{ zIndex: "2", width: "35%" }} alt="" />
              <img src={require("../assets/images/Mockup Dark Mode.png")} style={{ right: "4%", width: "40%" }} className=" position-absolute" alt="" />
            </div>
          </Col>
        </Row>

        <Row className="my-5 py-5 align-items-center">
          <Col>
            <div className="d-flex align-items-center text-end">
              <img src={require("../assets/images/Mockup_2 1.png")} className="position-relative w-50" style={{ zIndex: "2" }} alt="" />
              <img src={require("../assets/images/Home_Dekstop 1.png")} style={{ left: "24%" }} className="w-25 position-absolute" alt="" />
            </div>
          </Col>
          <Col md={5} className="align-items-center">
            <div className="text-gray">Custom APP Development</div>
            <div className="text-project">UTVI PWA</div>
            <div className="text-desc-project my-4">
              <ListGroup as="ol" numbered variant="flush">
                <ListGroup.Item as="li">2021 App Award Winner for Best Maid App</ListGroup.Item>
                <ListGroup.Item as="li">DSC was reportedly acquired by Unilever for $1 billion</ListGroup.Item>
                <ListGroup.Item as="li">4.8 Google Play Reviews</ListGroup.Item>
                <ListGroup.Item as="li">4.8 App Store Reviews</ListGroup.Item>
                <ListGroup.Item as="li">97% of app users would recommend the DSC app to a friend</ListGroup.Item>
              </ListGroup>
            </div>
            <Button className="btn-yellow" variant="">
              Case Study
              <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
            </Button>
          </Col>
        </Row>

        <Row className="my-5 py-5 align-items-center">
          <Col md={5} className="align-items-center">
            <div className="text-gray">DESIGN UI/UX</div>
            <div className="text-project">BASF WEB DESIGN</div>
            <div className="text-desc-project my-4">
              <ListGroup as="ol" numbered variant="flush">
                <ListGroup.Item as="li">2017 Webby Award Winner for Best Shopping App</ListGroup.Item>
                <ListGroup.Item as="li">DSC was reportedly acquired by Unilever for $1 billion</ListGroup.Item>
                <ListGroup.Item as="li">4.8 Google Play Reviews</ListGroup.Item>
                <ListGroup.Item as="li">97% of app users would recommend the DSC app to a friend</ListGroup.Item>
              </ListGroup>
            </div>
            <Button className="btn-yellow" variant="">
              Case Study
              <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
            </Button>
          </Col>
          <Col>
            <div className="d-flex align-items-center text-end">
              <img src={require("../assets/images/Mockup Mobile Light Mode (1).png")} className="position-relative" style={{ zIndex: "2", width: "35%" }} alt="" />
              <img src={require("../assets/images/Mockup Dark Mode (1).png")} style={{ right: "4%", width: "40%" }} className=" position-absolute" alt="" />
            </div>
          </Col>
        </Row>

        <Row className="my-5 py-5 align-items-center">
          <Col>
            <div className="d-flex align-items-center text-end">
              <img src={require("../assets/images/Home page.jpg")} className="position-relative w-50" style={{ zIndex: "2" }} alt="" />
              <img src={require("../assets/images/Checkout.jpg")} style={{ left: "24%" }} className="w-25 position-absolute" alt="" />
            </div>
          </Col>
          <Col md={5} className="align-items-center">
            <div className="text-gray">E-Commerce Development</div>
            <div className="text-project">Open Fashion Mobile App</div>
            <div className="text-desc-project my-4">
              <ListGroup as="ol" numbered variant="flush">
                <ListGroup.Item as="li">2021 App Award Winner for Best Maid App</ListGroup.Item>
                <ListGroup.Item as="li">DSC was reportedly acquired by Unilever for $1 billion</ListGroup.Item>
                <ListGroup.Item as="li">4.8 Google Play Reviews</ListGroup.Item>
                <ListGroup.Item as="li">4.8 App Store Reviews</ListGroup.Item>
                <ListGroup.Item as="li">97% of app users would recommend the DSC app to a friend</ListGroup.Item>
              </ListGroup>
            </div>
            <Button className="btn-yellow" variant="">
              Case Study
              <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PortofolioRow;

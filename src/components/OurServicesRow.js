import React, { useState } from "react";
import { Container, Row, Col, Button, Accordion, Stack } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TfiArrowTopRight } from "react-icons/tfi";

const OurServicesRow = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="our-services bg-black mb-5 py-5">
      <Container className="pt-5">
        <Row className="mb-5">
          <Col md={5}>
            <div className="text-title text-white mb-4">OUR SERVICES</div>
          </Col>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <p className="text-service">
                We’ve worked with a wide array of clients <br /> across the globe to apply design <br /> fundamentals of elegance, simplicity
              </p>
              <Button className="btn-view ms-auto" variant="">
                VIEW ALL
                <TfiArrowTopRight className="ms-4 text-white" style={{ fontSize: "65px" }} />
              </Button>
            </Stack>
          </Col>
        </Row>
        <hr style={{ border: "1px solid #FFFFFF", opacity: "100%" }} />
        <Row>
          <div className="accordion ">
            <div className="accordion-item align-items-center">
              <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <Row>
                  <Col md={5}>
                    <p className="text-title-service">e-commerce developement</p>
                  </Col>
                  <Col>
                    <Stack direction="horizontal" gap={3}>
                      <p className="text-desc-service">
                        You want to get the best out of your business and turn mere visitors into paying customers? Sell your products on a secure platform and not worry about the technical details? We will help you implement your
                        E-Commerce platform.
                      </p>
                      <Button className="btn-yellow" variant="" style={{ width: "85%" }}>
                        Learn More
                        <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
                      </Button>

                      <div>{isActive ? <AiOutlineMinus style={{ fontSize: "30px", color: "white" }} /> : <AiOutlinePlus style={{ fontSize: "30px", color: "white" }} />}</div>
                    </Stack>
                  </Col>
                </Row>
                {/* <div>{title}</div> */}
              </div>
              {isActive && (
                <div className="accordion-content">
                  <Row>
                    <Col md={5}>
                      <img src={require("../assets/images/img-services1.png")} className="w-100" alt="" />
                    </Col>
                    <Col>
                      <Stack direction="horizontal" gap={3}>
                        <img src={require("../assets/images/img-services2.png")} style={{ width: "45%" }} alt="" />
                        <img src={require("../assets/images/img-services3.png")} style={{ width: "45%" }} alt="" />
                      </Stack>

                      <p className="text-desc-service">
                        In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital
                        experience. They always put the clients first no matter how complicated the tasks are.
                      </p>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </div>
        </Row>
        <hr style={{ border: "1px solid #FFFFFF", opacity: "100%" }} />
        <Row>
          <div className="accordion ">
            <div className="accordion-item align-items-center">
              <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <Row>
                  <Col md={5}>
                    <p className="text-title-service">Custom App Development</p>
                  </Col>
                  <Col>
                    <Stack direction="horizontal" gap={3}>
                      <p className="text-desc-service">It’s time to turn your vision into a high-performing and responsive app. This is how your customers will interact with your business, which is why we pay attention to every detail.</p>
                      <Button className="btn-yellow" variant="" style={{ width: "65%" }}>
                        Learn More
                        <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
                      </Button>

                      <div>{isActive ? <AiOutlineMinus style={{ fontSize: "30px", color: "white" }} /> : <AiOutlinePlus style={{ fontSize: "30px", color: "white" }} />}</div>
                    </Stack>
                  </Col>
                </Row>
                {/* <div>{title}</div> */}
              </div>
              {isActive && (
                <div className="accordion-content">
                  <Row>
                    <Col md={5}>
                      <img src={require("../assets/images/img-services1.png")} className="w-100" alt="" />
                    </Col>
                    <Col>
                      <Stack direction="horizontal" gap={3}>
                        <img src={require("../assets/images/img-services2.png")} style={{ width: "45%" }} alt="" />
                        <img src={require("../assets/images/img-services3.png")} style={{ width: "45%" }} alt="" />
                      </Stack>

                      <p className="text-desc-service">
                        In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital
                        experience. They always put the clients first no matter how complicated the tasks are.
                      </p>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </div>
        </Row>
        <hr style={{ border: "1px solid #FFFFFF", opacity: "100%" }} />
        <Row>
          <div className="accordion ">
            <div className="accordion-item align-items-center">
              <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <Row>
                  <Col md={5}>
                    <p className="text-title-service">Integration With 3rd Party Web Services</p>
                  </Col>
                  <Col>
                    <Stack direction="horizontal" gap={3}>
                      <p className="text-desc-service">
                        We use all opportunities to solve business problems. Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.
                      </p>
                      <Button className="btn-yellow" variant="" style={{ width: "80%" }}>
                        Learn More
                        <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
                      </Button>

                      <div>{isActive ? <AiOutlineMinus style={{ fontSize: "30px", color: "white" }} /> : <AiOutlinePlus style={{ fontSize: "30px", color: "white" }} />}</div>
                    </Stack>
                  </Col>
                </Row>
                {/* <div>{title}</div> */}
              </div>
              {isActive && (
                <div className="accordion-content">
                  <Row>
                    <Col md={5}>
                      <img src={require("../assets/images/img-services1.png")} className="w-100" alt="" />
                    </Col>
                    <Col>
                      <Stack direction="horizontal" gap={3}>
                        <img src={require("../assets/images/img-services2.png")} style={{ width: "45%" }} alt="" />
                        <img src={require("../assets/images/img-services3.png")} style={{ width: "45%" }} alt="" />
                      </Stack>

                      <p className="text-desc-service">
                        In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital
                        experience. They always put the clients first no matter how complicated the tasks are.
                      </p>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </div>
        </Row>
        <hr style={{ border: "1px solid #FFFFFF", opacity: "100%" }} />
        <Row>
          <div className="accordion ">
            <div className="accordion-item align-items-center">
              <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <Row>
                  <Col md={5}>
                    <p className="text-title-service">Hosting/Maintenance</p>
                  </Col>
                  <Col>
                    <Stack direction="horizontal" gap={3}>
                      <p className="text-desc-service">
                        Our hosting services are designed to give you the highest level of security with respect to your website’s performance. We exclusively use safe and modern servers, which minimizes the risk of any single point of
                        failure. This includes a minimized risk of hacks or other malicious activities.
                      </p>
                      <Button className="btn-yellow" variant="" style={{ width: "101%" }}>
                        Learn More
                        <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
                      </Button>

                      <div>{isActive ? <AiOutlineMinus style={{ fontSize: "30px", color: "white" }} /> : <AiOutlinePlus style={{ fontSize: "30px", color: "white" }} />}</div>
                    </Stack>
                  </Col>
                </Row>
                {/* <div>{title}</div> */}
              </div>
              {isActive && (
                <div className="accordion-content">
                  <Row>
                    <Col md={5}>
                      <img src={require("../assets/images/img-services1.png")} className="w-100" alt="" />
                    </Col>
                    <Col>
                      <Stack direction="horizontal" gap={3}>
                        <img src={require("../assets/images/img-services2.png")} style={{ width: "45%" }} alt="" />
                        <img src={require("../assets/images/img-services3.png")} style={{ width: "45%" }} alt="" />
                      </Stack>

                      <p className="text-desc-service">
                        In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital
                        experience. They always put the clients first no matter how complicated the tasks are.
                      </p>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </div>
        </Row>
        <hr style={{ border: "1px solid #FFFFFF", opacity: "100%" }} />
      </Container>
    </section>
  );
};

export default OurServicesRow;

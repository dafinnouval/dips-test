import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { TfiArrowTopRight } from "react-icons/tfi";

const WorkflowRow = () => {
  return (
    <section className="workflow my-5 py-5">
      <div className="container">
        <div className="text-title mb-4">WORKFLOW</div>
        <Row>
          <Col md={5} className="me-5">
            <div className="d-flex flex-column">
              <p className="text-desc">
                It is particularly important for us that you as a customer are actively involved in creative processes and that you know at all times which step we are about to take next. Learn more about our workflow and our communication
                with you as a customer here.
              </p>
              <img src={require("../assets/images/wf-img.png")} className="w-100" alt="" />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column">
              <div className="text-sub-b mb-2">How we deal with projects from start to finish</div>
              <p className="text-desc my-3">The key to successful collaboration and results that are perfectly tailored to you is clear goal setting and the elimination of misunderstandings.</p>
              <p className="text-desc my-3">
                Before each project, we therefore obtain detailed information from you about what you expect from our service, what your goals are and what you particularly value. Our experts will also be happy to advise you on this step
                with their extensive specialist knowledge.
              </p>
              <p className="text-desc my-3">As soon as your expectations have been clarified, we get down to work. We actively involve you, the customer, in the processes so that you always know where your project currently stands.</p>
              <div className="my-4">
                <Button className="btn-yellow" variant="">
                  Learn More
                  <TfiArrowTopRight className="ms-4" style={{ fontSize: "25px" }} />
                </Button>
              </div>

              <div className="text-sub-u my-3">How we communicate with the client</div>
              <div className="text-sub-u mt-3">Stages of the process</div>
            </div>
          </Col>
          <Col md={1}>
            <div className="float-end">
              <TfiArrowTopRight className="arrow-right" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default WorkflowRow;

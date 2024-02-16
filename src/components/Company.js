import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Company = () => {
  return (
    <section>
      <Container>
        <Col lg="12" className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Hometutors?</h2>
        </Col>
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-vimeo-line"></i> Low changes
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-pinterest-line"></i> Fast and Reliable
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-dribbble-line"></i> Best Customer Service
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-apple-fill"></i> Earn Extra income
            </h3>
          </Col>

         
        </Row>
      </Container>
    </section>
  );
};

export default Company;

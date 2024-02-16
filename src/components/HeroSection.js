import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../images/img-1.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Advance Your  <br /> Carrer Path <br />   
              </h2>
              <p className="mb-5">
                Are you ready to unlock your full potential and embark on an
                educational adventure like no other? Look no further!
                Introducing our cutting-edge e-learning website, where knowledge
                knows no boundaries and learning is just a click away.
              </p>
            </div>
            <div className="search">
              <input type="text" />
              <button className="btn">Get Teacher</button>
              <button className="btn">Get Student</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

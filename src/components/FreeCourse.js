import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import courseImg01 from "../images/web-dev.jpg";
import courseImg02 from "../images/kids.jpg";
import courseImg03 from "./../images/seo.jpg";
import courseImg04 from "./../images/ui-ux.jpg";
import FreeCourseCard from "./FreeCourseCard";

import "../components/free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Web designing",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Biology",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Graphs - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Mathematics",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Classes</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;

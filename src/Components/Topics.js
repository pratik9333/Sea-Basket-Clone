import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Card, CardBody, CardText, CardTitle, Row, Col } from "reactstrap";

const Topic = ({ title, text }) => {
  return (
    <Card className="mb-5 Topics">
      <Row>
        <Col md="6">
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText className="mb-5">{text}</CardText>
            <span className="topic mt-5">
              Read More <FaChevronRight />
            </span>
          </CardBody>
        </Col>
        <Col md="6">
          <div className="image"></div>
        </Col>
      </Row>
    </Card>
  );
};

export default Topic;

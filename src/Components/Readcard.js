import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const Readcard = ({ title, text }) => {
  return (
    <Card className="mb-5 read-More">
      <CardBody>
        <CardTitle tag="h2">{title}</CardTitle>
        <CardText>{text}</CardText>
        <span className="read-more">
          Read More <FaChevronRight />
        </span>
      </CardBody>
    </Card>
  );
};

export default Readcard;

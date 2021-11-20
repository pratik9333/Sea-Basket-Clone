import React from "react";

import up from "../Assets/Images/navigation/up.png";
import down from "../Assets/Images/navigation/down.png";
import { Collapse, Card, CardBody, Row, Col } from "reactstrap";

const FAQ = ({ collapseTitle, collapseBody }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="faq-block"
      style={{ marginTop: "70px", marginBottom: "6px" }}
    >
      <div>
        <Row className="align-items-center text-center">
          <Col md="8 ">
            <p
              style={{
                paddingLeft: "56px",
                textAlign: "left",
                position: "relative",
                top: "5px",
              }}
            >
              {collapseTitle}
            </p>
          </Col>
          <Col md="4">
            <img
              src={isOpen ? up : down}
              alt="down"
              style={{ width: "40px", height: "50px" }}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </Col>
        </Row>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="mt-5 pt-3 px-5">
          <div>{collapseBody}</div>
        </div>
      </Collapse>
    </div>
  );
};

export default FAQ;

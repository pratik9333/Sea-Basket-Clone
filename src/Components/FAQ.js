import React from "react";

import up from "../Assets/Images/navigation/up.png";
import down from "../Assets/Images/navigation/down.png";
import { Collapse, Row, Col } from "reactstrap";

const FAQ = ({ collapseTitle, collapseBody }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="faq-block"
      style={{ marginTop: "70px", marginBottom: "6px" }}
    >
      <div>
        <Row className="align-items-center text-center">
          <Col md="10">
            <p
              style={{
                padding: "0px 20PX",
                textAlign: "left",
                position: "relative",
                top: "5px",
              }}
            >
              {collapseTitle}
            </p>
          </Col>
          <Col md="2">
            <img
              src={isOpen ? up : down}
              alt="down"
              style={{ width: "30px", height: "35px", cursor: "pointer" }}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </Col>
        </Row>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="mt-5 pt-3 px-4">
          <span>{collapseBody}</span>
        </div>
      </Collapse>
    </div>
  );
};

export default FAQ;

import React from "react";
import { Row, Col } from "reactstrap";

import logo from "../Assets/Images/Header/logo.jpg";

const WebFooter = () => {
  return (
    <div className="footer p-4" style={{ marginTop: "90px" }}>
      <div className="footer-content mt-4">
        <Row className="text-white gy-5">
          <Col md="6">
            <img src={logo} className="logo" alt="" />
          </Col>
          <Col md="3">
            <ul style={{ listStyle: "none" }}>
              <li className="mb-4">Support</li>
              <li className="mb-4">About Us</li>
              <li className="mb-4">Privacy Policy</li>
            </ul>
          </Col>
          <Col md="3">
            <ul style={{ listStyle: "none" }}>
              <li className="mb-4">Terms & Conditions</li>
              <li className="mb-4">Return & Refund Policy</li>
              <li className="mb-4">Shipping & Delivery Policy</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5 pb-3">
          <Col className="text-white text-center font-weight-light">
            <p>Sea Basket I All Rights Reserved I 2021 Copyright</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WebFooter;

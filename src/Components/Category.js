import React, { Fragment } from "react";

import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const Category = ({ cardimg, cardtitle, cardimgalt }) => {
  return (
    <Fragment>
      <Card className="text-center" style={{ cursor: "pointer" }}>
        <CardImg
          alt={cardimgalt}
          src={cardimg}
          top
          style={{
            width: "-webkit-fill-available",
            alignSelf: "center",
            borderRadius: "21px",
            height: "200px",
          }}
        />
        <CardBody>
          <CardTitle>{cardtitle}</CardTitle>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default Category;

import React, { Fragment } from "react";

import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const Category = ({ cardimg, cardtitle, cardimgalt }) => {
  return (
    <Fragment>
      <Card className="text-center">
        <CardImg
          alt={cardimgalt}
          src={cardimg}
          top
          style={{
            width: "100%",
            maxWidth: "205px",
            maxHeight: "100px",
            alignSelf: "center",
            marginTop: "10px",
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

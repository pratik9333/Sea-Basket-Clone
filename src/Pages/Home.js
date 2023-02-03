import React, { Fragment, useEffect, useState } from "react";
import NavB from "../Components/Navbar";
import Category from "../Components/Category";
import Readcard from "../Components/Readcard";
import Topic from "../Components/Topics";

import { Row, Col } from "reactstrap";
import FAQ from "../Components/FAQ";

//API
import { getCategories } from "../API/categories";
import API from "../backend";

//Images
import fish from "../Assets/Images/Header/below-navbar.svg";
import product from "../Assets/Images/Products/product.png";

const Home = () => {
  const [category, setCategory] = useState([
    {
      title: "Dang Fish",
      image:
        "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_1280.jpg",
    },
    {
      title: "Seatle Fish",
      image:
        "https://cdn.pixabay.com/photo/2021/03/14/11/14/fish-6093991_1280.jpg",
    },
    {
      title: "Corona Fish",
      image:
        "https://cdn.pixabay.com/photo/2020/10/12/20/57/aquarium-5650174_1280.jpg",
    },
  ]);

  useEffect(() => {
    // getCategories()
    //   .then((data) => {
    //     if (data.error) {
    //       console.log(data.error);
    //     } else {
    //       setCategory(data);
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
  }, []);

  return (
    <Fragment>
      <div className="header text-center">
        <NavB />
        <img
          src={fish}
          alt="Fish"
          style={{ marginTop: "37px" }}
          className="img-fluid"
        />
      </div>

      <div className="how-works">
        <h1 className="text-center" style={{ marginTop: "100px" }}>
          HOW IT WORKS
        </h1>
        <p className="mt-5 text-center">
          Sea Basket delivers fresh sourced seafood in a few easy clicks
        </p>
      </div>

      <div className="categories" style={{ marginTop: "90px" }}>
        <h2 className="mb-5">CATEGORIES</h2>
        <Row style={{ justifyContent: "space-between" }}>
          {category.map((category) => (
            <Col md="3" className="gy-5">
              <Category
                cardimg={category.image}
                cardtitle={category.title}
                cardimgalt={category.title}
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className="product" style={{ marginTop: "150px" }}>
        <h1>A GLANCE AT OUR PRODUCT</h1>
        <img src={product} alt="product" className="img-fluid mt-5" />
      </div>

      <div
        className="faq"
        style={{
          marginTop: "150px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <h1>FAQS</h1>
        </div>
        <div>
          <FAQ
            collapseTitle="Velit venenatis pretium mattis consectetur massa pretium mattis ?"
            collapseBody="Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
          />
          <FAQ
            collapseTitle="Velit venenatis pretium mattis consectetur massa pretium mattis ?"
            collapseBody="Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
          />
          <FAQ
            collapseTitle="Velit venenatis pretium mattis consectetur massa pretium mattis ?"
            collapseBody="Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
          />
        </div>
      </div>

      <div className="read" style={{ marginTop: "150px" }}>
        <h1 className="mb-5">HAVE A READ</h1>
        <Readcard
          title="The right quality"
          text="Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
        />
        <Readcard
          title="The right time"
          text="Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
        />
        <Readcard
          title="The basis of a balanced diet"
          text="Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
        />
      </div>

      <div className="topics" style={{ marginTop: "150px" }}>
        <h1 className="mb-5">topics you can’t miss</h1>
        <Topic
          title="topics you can’t miss"
          text="Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
        />
        <Topic
          title="how to clean/cut your seafood"
          text="Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
        />
      </div>
    </Fragment>
  );
};

export default Home;

const express = require("express");
const router = express.Router();

const {
  getCategory,
  setCategory,
  photo,
  getCategoryById,
} = require("../Controllers/category");

//params
router.param("categoryId", getCategoryById);

//Middleware
router.get("/category/:categoryId", photo);

//routes
router.post("/category", setCategory);
router.get("/category", getCategory);

module.exports = router;

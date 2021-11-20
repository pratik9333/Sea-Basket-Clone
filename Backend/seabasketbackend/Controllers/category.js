const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

const Category = require("../Models/Category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found",
      });
    }
    req.category = category;
    next();
  });
};

exports.getCategory = (req, res) => {
  Category.find()
    .select("-photo")
    .exec((err, categories) => {
      if (err) {
        return res.status(400).json({
          error: "No Categories found!",
        });
      }
      res.json(categories);
    });
};

//MiddleWare
exports.photo = (req, res, next) => {
  if (req.category.photo.data) {
    res.set("Content-Type", req.category.photo.ContentType);
    return res.send(req.category.photo.data);
  }
  next();
};

exports.setCategory = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }

    //destructure the fields
    const { title } = fields;
    if (!title) {
      return res.status(400).json({
        error: "please include all fields",
      });
    }

    let category = new Category(fields);

    //handle files
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "file size too big",
        });
      }
      category.photo.data = fs.readFileSync(file.photo.path);
      category.photo.contentType = file.photo.type;
    }

    // Save to DB
    category.save((err, category) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "Failed to store in DB",
        });
      }
      res.json(category);
    });
  });
};

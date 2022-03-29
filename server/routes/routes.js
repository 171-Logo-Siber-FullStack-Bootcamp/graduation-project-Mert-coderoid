// import nessary modules
const express = require('express');
const router = express.Router();
const pool = require('../config/pgConfig');
const models = require('../models/postgreSql.js');
const controllers = require('../controllers/pageController.js');


// // Routes 
router.get("/", controllers.getIndexPage);
router.get("/about", controllers.getAboutPage);

// Controllers
router.get("/products", models.getProducts);
router.get("/products/:id", models.getProduct);
router.post("/products", models.createProduct);
router.put("/products/:id", models.updateProduct);
router.delete("/products/:id", models.deleteProduct);

// add upload photho with id
// router.post("/upload", models.uploadPhoto);


// Export
module.exports = router;

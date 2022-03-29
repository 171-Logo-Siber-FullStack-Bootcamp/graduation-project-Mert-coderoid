// connect to the postgresql database
var pool = require("../config/pgConfig.js");

// get products from the database
getProducts = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM products");
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};


// get a single product from the database
getProduct = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM products WHERE id = $1", [req.params.id]);
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};

// create a new product in the database
createProduct = async (req, res) => {
    try {
        const response = await pool.query("INSERT INTO products (name, price, category, description, quantity, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [req.body.name, req.body.price, req.body.category, req.body.description, req.body.quantity, req.body.image]);

        res.status(201).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};

// update a product in the database with id
updateProduct = async (req, res) => {
    try {
        const response = await pool.query("UPDATE products SET name = $1, description = $2, price = $3, quantity = $4, image = $5, category = $6 WHERE id = $7 RETURNING *", [req.body.name, req.body.description, req.body.price, req.body.quantity, req.body.image, req.body.category, req.params.id]);
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};


// delete a product from the database
deleteProduct = async (req, res) => {
    try {
        const response = await pool.query("DELETE FROM products WHERE id = $1", [req.params.id]);
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};


// getProductElastic=(req, res) => {

//   elasticClient.search({
//     index:"kibana_sample_data_ecommerce",
//     body:{query: {
//       match_phrase_prefix: {
//           "category": "mert"
//       }
//   } }
//   },(err,rest)=>{
//     if (err) {
//       console.log(err);
//     }
//     else{
//       return    res.status(200).json(rest.hits.hits[0]._source);
//     }
//   })
// }

// postProductElastic=(req, res) => {
//   elasticClient.index({
//     index: "kibana_sample_data_ecommerce",
//     type:  '_doc',
//     body:req.body
//   },(err)=>{
//     if (err) {
//       console.log(err);
//     }
//     else{
//       return    res.status(200).json("data");
//     }
//   })
// }

/* 
// update a product in the database
updateProduct = async (req, res) => {
    try {
        const response = await pool.query("UPDATE products SET name = $1, description = $2, price = $3, quantity = $4, image = $5, category = $6, WHERE id = $7 RETURNING *", [req.body.name, req.body.description, req.body.price, req.body.quantity, req.body.image, req.body.category, req.params.id]);
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};
 */


// export all functions
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    // postProductElastic,
    // getProductElastic
};

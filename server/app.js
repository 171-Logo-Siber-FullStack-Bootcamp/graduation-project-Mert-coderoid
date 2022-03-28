// import necessary modules
const express = require('express');
const routes = require('./routes/routes.js');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
// set static
app.use(express.static('public'));

// Route the routers
app.use('/', routes);

// file upload api
app.post("/upload", async (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    await myFile.mv(`./public/uploads/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({ name: myFile.name, path: `/${myFile.name}` });
    });
});

// listen
app.listen(port, () => console.log(`Listening on port ${port}`));


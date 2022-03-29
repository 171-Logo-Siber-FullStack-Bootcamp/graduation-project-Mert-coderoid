getIndexPage = (req, res) => {
    res.send("Hello World");
}

getAboutPage = (req, res) => {
    res.send("About World");
}

// export
module.exports = {
    getIndexPage,
    getAboutPage
}

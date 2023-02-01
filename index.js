const express = require("express");

const app = express();

app.use((req, res) => {
    console.log("We got a Request");
    res.send({color: "Red"})
})

app.listen(8080, () => {
    console.log("Ouvindo");
})
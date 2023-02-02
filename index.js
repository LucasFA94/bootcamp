const express = require("express");

const app = express();

// app.use((req, res) => {
//     console.log("We got a Request");
//     res.send("<h1>É o meu Site</h1>")
// })



app.get("/", (req, res) => {
    res.send("This is the Home Page");
})

app.get("/cats", (req, res) => {
    res.send("Meow!!!!")
})

app.post("/cats", (req, res) => {
    res.send("POST FOR /cats")
})

app.get("/dogs", (req, res) => {
    res.send("WOOOF")
})


app.post("/dogs", (req, res) => {
    res.send("POST FOR /dogs")
})

app.get("*", (req, res) => {
    res.send("Unknow Path");
})

app.listen(8080, () => {
    console.log("Ouvindo");
})
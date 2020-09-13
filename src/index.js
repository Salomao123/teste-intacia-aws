const express = require("express");
const app = express();

app.use(express.static("."));

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html")
})

app.listen(3000, function() {
    console.log("aplicação está funcionando!");
})
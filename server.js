const express = require("express");
const app = express();


app.get("/gol/:name", (req, res) => {
	res.sendFile(__dirname+"/gol/"+req.params["name"]);
})

app.get("/", (req, res) => {
	res.sendFile(__dirname+"/index.html");
})

app.get("/style.css", (req, res) => {
	res.sendFile(__dirname+"/style.css");
})

app.listen(8080);
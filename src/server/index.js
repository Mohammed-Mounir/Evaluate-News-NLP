const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

dotenv.config({ path: `${__dirname}/./../../.env` });
const app = express();

console.log(`Your API key is ${process.env.API_KEY}`);

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

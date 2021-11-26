import dotenv from "dotenv";
import path from "path";
import fetch from "node-fetch";
import express from "express";
import cors from "cors";
const app = express();
const __dirname = path.resolve();
const API_KEY = process.env.API_KEY;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
console.log(__dirname);
dotenv.config({ path: `${__dirname}/./../../.env` });

app.use(express.static("dist"));

app.get("/", (req, res) => {
  // res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.post("/eval", async (req, res) => {
  const newsUrl = req.body.url;
  console.log(
    `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${newsUrl}&lang=en`
  );

  const response = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${newsUrl}&lang=en`
  );

  const data = await response.json();

  console.log(data);
  // res.send(mockAPIResponse);
});

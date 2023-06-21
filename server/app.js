const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/postTemperature", async (req, res) => {
  console.log("Temperature: " + req.body.temperature);
});

app.post("/postBatteryData", async (req, res) => {
  console.log("Here1");
  console.log(req.body);
  res.send("Success");
});

app.get("/testGet", async (req, res) => {
  console.log("Get request");
  res.send("Hello World");
});

app.listen(8446, () => {
  console.log("Server Running");
});

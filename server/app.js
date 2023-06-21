const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const dotenv = require("dotenv");

app.use(express.json());
app.use(cors());

let batteryData = {};

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.post("/postTemperature", async (req, res) => {
  console.log("Temperature: " + req.body.temperature);
});

app.post("/postBatteryData", async (req, res) => {
  console.log("Here 1");
  // console.log(req.body);
  pool.query(
    "INSERT INTO battery (pack_mv, pack_ma, cur_cap, full_cap, cycle_cnt, year,month,day,version,cap_pct,ntc0,ntc1,ntc2,ntc3,cell0_mv,cell1_mv,cell2_mv,cell3_mv,cell4_mv,cell5_mv,cell6_mv,cell7_mv,cell8_mv,cell9_mv,cell10_mv,cell11_mv,cell12_mv,cell13_mv,cell14_mv,cell15_mv,cell16_mv,cell17_mv,cell18_mv, cell19_mv) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.pack_mv,
      req.body.pack_ma,
      req.body.cur_cap,
      req.body.full_cap,
      req.body.cycle_cnt,
      req.body.year,
      req.body.month,
      req.body.day,
      req.body.version,
      req.body.cap_pct,
      req.body.ntc0,
      req.body.ntc1,
      req.body.ntc2,
      req.body.ntc3,
      req.body.cell0_mv,
      req.body.cell1_mv,
      req.body.cell2_mv,
      req.body.cell3_mv,
      req.body.cell4_mv,
      req.body.cell5_mv,
      req.body.cell6_mv,
      req.body.cell7_mv,
      req.body.cell8_mv,
      req.body.cell9_mv,
      req.body.cell10_mv,
      req.body.cell11_mv,
      req.body.cell12_mv,
      req.body.cell13_mv,
      req.body.cell14_mv,
      req.body.cell15_mv,
      req.body.cell16_mv,
      req.body.cell17_mv,
      req.body.cell18_mv,
      req.body.cell19_mv,
    ]
  );
  batteryData = req.body;
  console.log(batteryData);
  res.send("Success");
});

app.get("/getBatteryData", async (req, res) => {
  pool.query("select * from battery LIMIT 1", (err, data) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(data);
  });
});

// app.get("/testGet", async (req, res) => {
//   res.send("Hello World");
// });

app.listen(8446, () => {
  console.log("Server Running");
});

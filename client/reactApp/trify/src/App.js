import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

import { useState, useEffect } from "react";

function App() {
  const [batteryData, setBatteryData] = useState({});

  useEffect(() => {
    console.log("here");
    const getBatteryData = async () => {
      try {
        let batteryInfo = await Axios.get(
          "http://localhost:8446/getBatteryData"
        );
        setBatteryData(batteryInfo);
      } catch (err) {
        console.log(err);
      }
    };
    getBatteryData();
  }, []);

  return (
    <div className="App">
      <h1>Battery Data Dashboard</h1>
      <p>
        Battery Percentage: <b>{batteryData.data[0].cap_pct}%</b>, pack_mv:{" "}
        {batteryData.data[0].pack_mv}, pack_ma: {batteryData.data[0].pack_ma}
      </p>
      <p>
        cur_cap: {batteryData.data[0].cur_cap}, full_cap:{" "}
        {batteryData.data[0].full_cap}, cycle_cnt:{" "}
        {batteryData.data[0].cycle_cnt}
      </p>
      <p>
        date: {batteryData.data[0].day}/{batteryData.data[0].month}/
        {batteryData.data[0].year}, version: {batteryData.data[0].version}
      </p>
      <p>
        temp sensor 0: {batteryData.data[0].ntc0}, temp sensor 1:{" "}
        {batteryData.data[0].ntc1}, temp sensor 2: {batteryData.data[0].ntc2},
        temp sensor 3: {batteryData.data[0].ntc3}
      </p>
      <p>
        cell0_mv: {batteryData.data[0].cell0_mv}, cell1_mv:{" "}
        {batteryData.data[0].cell1_mv}, cell2_mv: {batteryData.data[0].cell2_mv}
      </p>
      <p>
        cell3_mv: {batteryData.data[0].cell3_mv}, cell4_mv:{" "}
        {batteryData.data[0].cell4_mv}, cell50_mv:{" "}
        {batteryData.data[0].cell5_mv}
      </p>
      <p>
        cell6_mv: {batteryData.data[0].cell6_mv}, cell7_mv:{" "}
        {batteryData.data[0].cell7_mv}, cell8_mv: {batteryData.data[0].cell8_mv}
      </p>
      <p>
        cell9_mv: {batteryData.data[0].cell9_mv}, cell10_mv:{" "}
        {batteryData.data[0].cell10_mv}, cell11_mv:{" "}
        {batteryData.data[0].cell11_mv}
      </p>
      <p>
        cell12_mv: {batteryData.data[0].cell12_mv}, cell13_mv:{" "}
        {batteryData.data[0].cell13_mv}, cell14_mv:{" "}
        {batteryData.data[0].cell14_mv}
      </p>
      <p>
        cell15_mv: {batteryData.data[0].cell15_mv}, cell16_mv:{" "}
        {batteryData.data[0].cell16_mv}, cell17_mv:{" "}
        {batteryData.data[0].cell17_mv}
      </p>
      <p>
        cell18_mv: {batteryData.data[0].cell18_mv}, cell19_mv:{" "}
        {batteryData.data[0].cell19_mv}
      </p>
    </div>
    // pack_mv int, pack_ma int, cur_cap int, full_cap int, cycle_cnt int, year YEAR, month int, day int, version int, cap_pct int,
    // ntc0 FLOAT, ntc1 FLOAT, ntc2 FLOAT, ntc3 FLOAT, cell0_mv int, cell1_mv int, cell2_mv int, cell3_mv int, cell4_mv int, cell5_mv int, cell6_mv int, cell7_mv int, cell8_mv int, cell9_mv int, cell10_mv int,
    // cell11_mv int, cell12_mv int, cell13_mv int, cell14_mv int, cell15_mv int, cell16_mv int, cell17_mv int, cell18_mv int, cell19_mv
  );
}

export default App;

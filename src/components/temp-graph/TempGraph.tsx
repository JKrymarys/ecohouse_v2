import { useEffect } from "react";

import Chart from "chart.js/auto";

import { dummyTempData } from "utils/dummyData";

import "./TempGraph.scss";

// import "./HouseInfo.scss";

// interface CurrentHouseState {
//   datetime: string;
//   pressure: number;
//   temp: number;
// }

const createChart = (data: number[], labels: string[]) => {
  return new Chart("myChart", {
    type: "line",

    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          borderWidth: 1,
          borderColor: "red",
        },
      ],
    },
  });
};

export default function TempGraph() {
  const tempTimeseriesData = dummyTempData.map((e) => e.temp);
  const labels = dummyTempData.map((e) => e.dateTime);

  console.log("tempTimeseriesData", tempTimeseriesData);

  useEffect(() => {
    createChart(tempTimeseriesData, labels);
  }, []);

  return (
    <div className="temp-chart">
      <canvas id="myChart"></canvas>
    </div>
  );
}

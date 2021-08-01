import { useEffect } from "react";

import Chart from "chart.js/auto";

import { getHistoricData } from "utils/backend";

import { TempEntry } from "utils/types";

import "./TempGraph.scss";
import { useState } from "react";

function updateData(chart: any, data: number[], labels: string[]) {
  chart.data.labels = labels;
  chart.data.datasets[0].data = data;
  chart.update();
}

const createChart = (data: number[], labels: string[]) => {
  return new Chart("myChart", {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          borderWidth: 1,
          borderColor: "#AB2B00",
          backgroundColor: "#D13400",
          label: "Temp",
        },
      ],
    },
  });
};

export default function TempGraph() {
  const [historicData, setHistoricData] = useState<any>([]);
  const [chartRef, setChartRef] = useState<any>();

  const tempTimeseriesData = historicData.map(({ temp }: TempEntry) => temp);
  const labels = historicData.map(({ dateTime }: TempEntry) => dateTime);

  useEffect(() => {
    getHistoricData().then(setHistoricData);
  }, []);

  useEffect(() => {
    const chart = createChart(tempTimeseriesData, labels);
    setChartRef(chart);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!chartRef) return;

    updateData(chartRef, tempTimeseriesData, labels);
    chartRef.update();
  }, [chartRef, tempTimeseriesData, labels]);

  return (
    <div className="temp-chart">
      <canvas id="myChart"></canvas>
    </div>
  );
}

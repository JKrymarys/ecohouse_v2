import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import Chart from "chart.js/auto";
import "chartjs-adapter-moment";

import { StateEntry } from "utils/types";
import * as Utils from "utils/chartUtils";

interface ChartData {
  x: string;
  y: number;
}

function updateData(
  chart: any,
  tempData: ChartData[],
  pressureData: ChartData[]
) {
  chart.data.datasets[0].data = tempData;
  chart.data.datasets[1].data = pressureData;
  chart.update();
}

const createChart = (tempData: ChartData[], pressureData: ChartData[]) => {
  return new Chart("myChart", {
    type: "line",
    data: {
      datasets: [
        {
          data: tempData,
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.CHART_COLORS.redTransparent,
          label: "Temp",
          yAxisID: "tempY",
        },
        {
          data: pressureData,
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.CHART_COLORS.blueTransparent,
          label: "Pressure",
          yAxisID: "pressureY",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },

      scales: {
        x: {
          type: "time",
          time: {
            tooltipFormat: "lll",
          },
          title: {
            display: true,
            text: "Date",
          },
        },
        tempY: {
          type: "linear",
          display: true,
          position: "left",
          suggestedMin: 10,
          suggestedMax: 40,
        },
        pressureY: {
          type: "linear",
          display: true,
          position: "right",
          suggestedMin: 960,
          suggestedMax: 1050,
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    },
  });
};

export default function TempPressureGraph() {
  const { data } = useAppSelector((state) => state.sensorStats);

  const [chartRef, setChartRef] = useState<any>();

  const tempData = data.map(({ timestamp, temp }: StateEntry) => ({
    x: timestamp,
    y: temp,
  }));

  const pressureData = data.map(({ timestamp, pressure }: StateEntry) => ({
    x: timestamp,
    y: pressure,
  }));

  useEffect(() => {
    const chart = createChart(tempData, pressureData);
    setChartRef(chart);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!chartRef) return;

    updateData(chartRef, tempData, pressureData);
    chartRef.update();
  }, [chartRef, tempData, pressureData]);

  return (
    <div
      className="bg-white border-transparent rounded-lg shadow-xl p-10"
      style={{ position: "relative", height: "60vh", width: "60vw" }}
    >
      <canvas id="myChart"></canvas>
    </div>
  );
}

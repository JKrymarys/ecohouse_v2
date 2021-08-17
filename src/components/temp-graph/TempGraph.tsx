import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import Chart from "chart.js/auto";
import "chartjs-adapter-moment";

import { TempEntry } from "utils/types";

interface ChartData {
  x: string;
  y: number;
}

function updateData(chart: any, tempData: ChartData[]) {
  chart.data.datasets[0].data = tempData;
  chart.update();
}

const createChart = (tempData: ChartData[]) => {
  return new Chart("myChart", {
    type: "line",
    data: {
      datasets: [
        {
          data: tempData,
          borderWidth: 1,
          borderColor: "#AB2B00",
          backgroundColor: "#D13400",
          label: "Temp",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
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
      },
    },
  });
};

export default function TempGraph() {
  const { data } = useAppSelector((state) => state.houseTemp);

  const [chartRef, setChartRef] = useState<any>();

  const tempData = data.map(({ timestamp, temp }: TempEntry) => ({
    x: timestamp,
    y: temp,
  }));

  useEffect(() => {
    const chart = createChart(tempData);
    setChartRef(chart);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!chartRef) return;

    updateData(chartRef, tempData);
    chartRef.update();
  }, [chartRef, tempData]);

  return (
    <div
      className="bg-white border-transparent rounded-lg shadow-xl p-10"
      style={{ position: "relative", height: "60vh", width: "80vw" }}
    >
      <canvas id="myChart"></canvas>
    </div>
  );
}

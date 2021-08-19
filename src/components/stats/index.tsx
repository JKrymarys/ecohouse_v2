import { useAppSelector } from "store/hooks";
import "chartjs-adapter-moment";
import { StateEntry } from "utils/types";

function calculateMeanTemp(data: StateEntry[]) {
  return (
    data.reduce((mean: number, dataEntry: StateEntry) => {
      mean += dataEntry.temp;
      return mean;
    }, 0) / data.length
  );
}

function calculateMeanPressure(data: StateEntry[]) {
  const filterOutData = data.filter((e) => e.pressure);
  return (
    filterOutData.reduce((mean: number, dataEntry: StateEntry) => {
      mean += dataEntry.pressure;
      return mean;
    }, 0) / filterOutData.length
  );
}

const today = new Date().toISOString().slice(0, 10);

export default function Stats() {
  const { data } = useAppSelector((state) => state.houseTemp);

  const lastEntry = data[data.length - 1];
  const todayEntries = data.filter((e: StateEntry) =>
    e.timestamp.includes(today)
  );

  const lastEntryDatetime = new Date(
    Date.parse(lastEntry?.timestamp)
  ).toLocaleString();

  const allTimeMeanTemp = calculateMeanTemp(data);
  const todayMeanTemp = calculateMeanTemp(todayEntries);

  const allTimeMeanPressure = calculateMeanPressure(data);
  const todayMeanPressure = calculateMeanPressure(todayEntries);

  return (
    <div className="bg-white border-transparent rounded-lg shadow-xl p-10 h-full flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-semibold mb-6">Stats</h1>
        Current: {lastEntry?.temp.toFixed(2)} °C
        <br />
        <div className="mb-4">
          Today mean temperature: {allTimeMeanTemp.toFixed(2)} °C <br />
          All time mean temperature: {todayMeanTemp.toFixed(2)} °C
        </div>
        <div className="mb-4">
          Today mean pressure: {allTimeMeanPressure.toFixed(2)} hPa <br />
          All time mean pressure: {todayMeanPressure.toFixed(2)} hPa
        </div>
      </div>
      <p className="text-sm text-gray-400">Last data: {lastEntryDatetime}</p>
    </div>
  );
}

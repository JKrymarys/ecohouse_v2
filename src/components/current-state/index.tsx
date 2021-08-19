import { useAppSelector } from "store/hooks";
import "chartjs-adapter-moment";
import { StateEntry } from "utils/types";

function calculateMean(data: StateEntry[]) {
  return (
    data.reduce((mean: number, dataEntry: StateEntry) => {
      mean += dataEntry.temp;
      return mean;
    }, 0) / data.length
  );
}

const today = new Date().toISOString().slice(0, 10);

export default function CurrentState() {
  const { data } = useAppSelector((state) => state.houseTemp);

  const lastEntry = data[data.length - 1];
  const todayEntries = data.filter((e: StateEntry) =>
    e.timestamp.includes(today)
  );

  const lastEntryDatetime = new Date(
    Date.parse(lastEntry?.timestamp)
  ).toLocaleString();

  const allTimeMean = calculateMean(data);
  const todayMean = calculateMean(todayEntries);

  return (
    <div className="bg-white border-transparent rounded-lg shadow-xl p-10 h-full flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-semibold mb-4">Stats</h1>
        Current: {lastEntry?.temp} °C
        <br />
        Today mean: {todayMean.toFixed(2)} °C <br />
        All time mean: {allTimeMean.toFixed(2)} °C <br />
      </div>
      <p className="text-sm text-gray-400">Last data: {lastEntryDatetime}</p>
    </div>
  );
}

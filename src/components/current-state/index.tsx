// import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import "chartjs-adapter-moment";
import { TempEntry } from "utils/types";

export default function CurrentState() {
  const { data } = useAppSelector((state) => state.houseTemp);

  const lastEntry = data[data.length - 1];
  const today = new Date().toISOString().slice(0, 10);
  const lastEntryDatetime = new Date(
    Date.parse(lastEntry?.timestamp)
  ).toLocaleString();

  const todayEntries = data.filter((e) => e.timestamp.includes(today));

  const todayMean =
    todayEntries.reduce((mean: number, dataEntry: TempEntry) => {
      mean += dataEntry.temp;
      return mean;
    }, 0) / todayEntries.length;

  return (
    <div className="bg-white border-transparent rounded-lg shadow-xl p-10 h-full">
      <h1>Stats ({lastEntryDatetime})</h1>
      Current temperature: {lastEntry?.temp} <br />
      Today mean temperature: {todayMean}
    </div>
  );
}

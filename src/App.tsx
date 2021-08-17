import { useEffect } from "react";

import { useAppDispatch } from "store/hooks";
import {
  houseDataFetch,
  houseDataLoaded,
  houseDataError,
} from "./store/houseTempSlice";

import TempGraph from "components/temp-graph/TempGraph";

import { getHistoricData } from "utils/backend";

function App() {
  const currentYear = new Date().getFullYear();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(houseDataFetch());

    getHistoricData()
      .then((data) => houseDataLoaded(data))
      .catch(() => houseDataError());
  }, []);

  return (
    <div className="h-screen bg-gray-800 p-3 flex flex-col justify-between">
      <header className="text-2xl font-bold text-white h-12 flex justify-center">
        Eco house - dashboard
      </header>
      <main className="mx-auto flex flex-row p-6">
        <div className="w-9/12">
          <TempGraph />
        </div>
      </main>
      <footer className="h-12 flex items-center justify-center w-full border-t text-white">
        Created with ☕ &nbsp;
        <a className="hover:text-gray-400" href="https://www.jkrymarys.pl/">
          &nbsp;jkrymarys.pl&nbsp;
        </a>
        ©&nbsp;{currentYear}
      </footer>
    </div>
  );
}

export default App;

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  houseDataFetch,
  houseDataLoaded,
  houseDataError,
} from "./store/houseTempSlice";

import TempPressureGraph from "components/temp-pressure-graph";
import CurrentState from "components/current-state";

import { getHistoricData } from "utils/backend";

function App() {
  const currentYear = new Date().getFullYear();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.houseTemp);

  useEffect(() => {
    dispatch(houseDataFetch());

    getHistoricData()
      .then((data) => dispatch(houseDataLoaded(data)))
      .catch(() => dispatch(houseDataError()));
  }, [dispatch]);

  //TODO: improve loading and error handlers
  if (status.loading) {
    return <div>Loading....</div>;
  }

  if (status.error) {
    return <div>Error!</div>;
  }

  return (
    <div className="min-h-screen h-full bg-gray-800 p-3 flex flex-col justify-between">
      <header className="text-2xl font-bold text-white h-12 flex justify-center">
        Eco house - dashboard
      </header>
      <main className="flex flex-row flex-wrap p-6 justify-between items-stretch">
        <div className="p-6">
          <TempPressureGraph />
        </div>
        <div className="p-6 flex-grow">
          <CurrentState />
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

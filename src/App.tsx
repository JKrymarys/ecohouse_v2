import "./App.scss";

import HouseInfo from "components/house-info/HistoricDataTable";
import TempGraph from "components/temp-graph/TempGraph";

function App() {
  return (
    <div>
      <h1>Eco house v2</h1>
      <HouseInfo />
      <TempGraph />
    </div>
  );
}

export default App;

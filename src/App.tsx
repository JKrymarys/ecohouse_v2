import TempGraph from "components/temp-graph/TempGraph";

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-screen bg-gray-800 p-3">
      <header className="text-2xl font-bold text-white h-1/6 flex justify-center">
        Eco house - dashboard
      </header>
      <main className="mx-auto w-10/12 h-4/6">
        <TempGraph />
      </main>
      <footer className="h-1/6 flex items-center justify-center w-full h-24 border-t text-white">
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

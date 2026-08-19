import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Overview from "./components/Overview";
import Workspace from "./components/Workspace";
import { daily, weekly } from "./data/dashboard";

function App() {
  const [period, setPeriod] = useState("Daily");
  const [activeSection, setActiveSection] = useState("CEO overview");
  const data = period === "Daily" ? daily : weekly;

  return (
    <main className="app-shell">
      <Sidebar activeSection={activeSection} onSelect={setActiveSection} />
      <section className="content">
        <Topbar />
        <div className="page-content">
          {activeSection === "CEO overview" ? (
            <Overview data={data} period={period} onPeriodChange={setPeriod} />
          ) : (
            <Workspace section={activeSection} />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;

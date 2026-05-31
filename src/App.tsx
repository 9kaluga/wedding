import CountdownTimer from "./components/CountdownTimer";
import MapSection from "./components/MapSection";
import ScheduleSection from "./components/ScheduleSection";
import WeddingCard from "./components/WeddingCard";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <WeddingCard />
      <CountdownTimer />
      <ScheduleSection />
      <MapSection />
    </div>
  );
}

export default App;

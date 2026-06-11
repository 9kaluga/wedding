import CountdownTimer from "./components/CountdownTimer";
import MapSection from "./components/MapSection";
import RsvpConfirmation from "./components/RsvpConfirmation";
import ScheduleSection from "./components/ScheduleSection";
import TipsSection from "./components/TipsSection";
import WeddingCard from "./components/WeddingCard";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <WeddingCard />
      <CountdownTimer />
      <ScheduleSection />
      <TipsSection />
      <MapSection />
      <RsvpConfirmation />
    </div>
  );
}

export default App;

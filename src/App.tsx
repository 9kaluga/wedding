import WeddingCard from './components/WeddingCard';
import CountdownTimer from './components/CountdownTimer';
import MapSection from './components/MapSection';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <WeddingCard />
      <CountdownTimer />
      <MapSection />
    </div>
  );
}

export default App;
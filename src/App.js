import './App.css';
import AdvisorCard from './components/AdvisorCard';
import Header from './components/Header';
import Mentors from './components/Mentors';
import Uni from './components/Uni';


function App() {
  return (
    <div>
      <Header />
      <Uni />
      <Mentors />
      <AdvisorCard />
    </div>
  );
}

export default App;

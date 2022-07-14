import logo from './logo.svg';
import Header from './Components/Header';
import './App.css';
import Hero from './Components/Hero';
import PopularItems from './Components/PopularItems';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PopularItems />
    </div>
  );
}

export default App;

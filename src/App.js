import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
   <Hero/>
    </div>
  );
}

export default App;

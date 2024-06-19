import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AverageCalculator from './Averagecalculator';
import PrimeChecker from './PrimeChecker';
import FibonacciGenerator from './FibonacciGenerator';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Multi-Function Calculator</h1>
          <nav>
            <ul>
              <li><Link to="/test/average">Average Calculator</Link></li>
              <li><Link to="/test/prime">Prime Checker</Link></li>
              <li><Link to="/test/fibo">Fibonacci Generator</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/test/average" element={<AverageCalculator />} />
            <Route path="/test/prime" element={<PrimeChecker />} />
            <Route path="/test/fibo" element={<FibonacciGenerator />} />
            <Route path="/" element={<p>Select a function from the menu above.</p>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


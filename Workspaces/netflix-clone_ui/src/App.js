import React from 'react';
import Navbar from './Component/Navbar';
import './App.css';
import Card from './Component/Card';

function App() {
  return (
    <div className="App">
      <Navbar name1='All Netflix Series Download From Here' />
      <Card />
    </div>
  );
}

export default App;

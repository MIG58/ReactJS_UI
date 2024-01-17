import React from 'react';
import './App.css';
import card1 from "./emb.png"
import card2 from "./INDIA.png"
import card3 from "./subhas.jpg"
import card4 from "./hill.jpg"

function App() {
  return (
    <div className="App">
     <h1 align="center">Beauty of INDIA</h1>
  <First />
    </div>
  );
}

function First(){
  return(
    <div >
      <div className='first'>
          <div className='firstone' >
              <img src={card1} height="100%" width="100%" />
          </div>
          <div className='firstone'>
          <img src={card2} height="100%" width="100%" />

          </div>
          <div className='firstone'>
          <img src={card3} height="100%" width="100%" />

          </div>
          <div className='firstone'>
          <img src={card4} height="100%" width="100%" />
          </div>
      </div>
    </div>
  )
}

export default App;
import React, { useState } from "react";
import "./App.css";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
function App() {
  const [reset, setReset] = useState(0);
  const [balls, setBalls] = useState(0);
  const countBalls = () => {
    setBalls(balls => balls + 1, balls === 4 ? setBalls(-1) : balls);
  };

  const [strikes, setStrikes] = useState(0);
  const countStrikes = () => {
    setStrikes(strikes => strikes + 1, strikes >= 3 ? setStrikes(-1) : strikes);
  };

  const [fouls, setFouls] = useState(0);
  const countFouls = () => {
    setFouls(
      fouls => fouls + 1,
      fouls >= 2 ? setFouls(-1) : fouls,
      fouls ? setStrikes(strikes => strikes + 1) : fouls,
      strikes === 2 ? setStrikes(strikes) : fouls
    );
  };

  const [hits, setHits] = useState(0);
  const countHits = () => {
    setHits(
      Hits => Hits + 1,
      hits >= 1 ? setStrikes(reset) : hits,
      hits >= 1 ? setBalls(reset) : hits
    );
  };

  console.log(strikes);
  return (
    <div className='App'>
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        balls={balls}
        countBalls={countBalls}
        strikes={strikes}
        countStrikes={countStrikes}
        fouls={fouls}
        countFouls={countFouls}
        hits={hits}
        countHits={countHits}
      />
    </div>
  );
}

export default App;

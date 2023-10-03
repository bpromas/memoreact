import { useState, useEffect } from 'react'
import './style/Game.css'
import NoButton from './components/NoButton.jsx'
import YesButton from './components/YesButton.jsx'
import Symbol from './components/Symbol.jsx'
import SymbolCounter from './components/SymbolCounter.jsx'
import Timer from './components/Timer.jsx'
import MistakesCounter from './components/MistakesCounter.jsx'

function Game() {

  const duration=90;


  document.body.addEventListener('keydown', function(e) {
    e.stopImmediatePropagation();
    if(e.key == 'j' || e.key == 'J'){
      handleYes();
    } else if(e.key == 'f' || e.key == 'F'){
      handleNo();
    }
  });

  const timesUp = () => {
    //TO-DO
    console.log("time's up!");
  }

  const handleYes = () => {
    //TO-DO
    console.log("yes");
  }

  const handleNo = () => {
    //TO-DO
    console.log("no");
  }

  return (
      <div id="game">
        <MistakesCounter/>
        <SymbolCounter/>
        <NoButton handleClick={handleNo}/>
        <Symbol/>
        <YesButton handleClick={handleYes}/>
        <Timer duration={duration} timesUp={timesUp} />
      </div>
  )
}

export default Game

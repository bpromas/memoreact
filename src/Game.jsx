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

  const timesUp = () => {
    //TO-DO
    console.log("time's up!");
  }

  return (
      <div id="game">
        <MistakesCounter/>
        <SymbolCounter/>
        <NoButton/>
        <Symbol/>
        <YesButton/>
        <Timer duration={duration} timesUp={timesUp} />
      </div>
  )
}

export default Game

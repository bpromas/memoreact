import { useState, useEffect } from 'react'
import './style/Game.css'
import NoButton from './components/NoButton.jsx'
import YesButton from './components/YesButton.jsx'
import Symbol from './components/Symbol.jsx'
import SymbolCounter from './components/SymbolCounter.jsx'
import Timer from './components/Timer.jsx'
import MistakesCounter from './components/MistakesCounter.jsx'

function Game() {

  return (
      <div id="game">
        <NoButton/>
        <YesButton/>
        <Symbol/>
        <SymbolCounter/>
        <Timer/>
        <MistakesCounter/>
      </div>
  )
}

export default Game

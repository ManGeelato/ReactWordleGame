// detailing the rules of the game
import React from 'react'
import './Help.scss'

const Help = () => {
  return (
    <div className="help">
       <h2> HOW TO PLAY</h2>

        <p>
          Guess the WORDLE in six tries.
          Each guess must be a valid five-letter word. Hit the enter button to submit.<br></br>
          After each guess, the color of the tiles will change to show how close your guess was to the word.
        </p>

        <h2>Examples</h2>

        <p><span className="correct">W</span>EARY</p>
        <p>P<span className="almostCorrect">I</span>LLS</p>
        <p>VAG<span className="wrong">U</span>E</p>

        <p>The letter <span className="correct">W</span> is in the word and in the correct spot.</p>
        <p>The letter <span className="almostCorrect">I</span> is in the word but in the wrong spot.</p>
        <p>The letter <span className="wrong">U</span> is not in the word in any spot.</p>
        <h3>A new WORDLE will be available each day!</h3>
    </div>
  )
}

export default Help;


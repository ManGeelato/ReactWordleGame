import React, {useContext} from 'react';
import {WordleContext} from '../../App';
import './GameOver.scss'

function GameOver() {
  // we grab information of gameOver via context like so
  const {gameOver, wordTry, correctWord} = useContext(WordleContext);

  return (
    <div className="over">
      {/* now here if the user correctly guesses the word, we set the text to a message of success
       */}
      <h2>{gameOver.wordGuessed ? 'Hooray, Word Guessed!' : 'Oops, Try Again!'}</h2>
      {/* then we actually show the user the correct word */}
      <h1>Correct Word is: {correctWord}</h1>
      {/* we then tell the user how many attempts they tried to guess the word */}
      {gameOver.wordGuessed && (<h2>Word Guessed in: {wordTry.attempt} trial(s)</h2>)}
    </div>
  )
}

export default GameOver
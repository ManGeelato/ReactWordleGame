import React, { useContext, useEffect } from "react";
import { WordleContext } from "../../App";
import './Word.scss';

function Word({ letterPos, attemptVal }) {
  // now to access gridLetters state from App js. We call WorldeContext through useContext hook
  const { grid, setDisabledLetters, wordTry, correctWord } = useContext(WordleContext);
  const word = grid[attemptVal][letterPos];

  // we have to determine 3 possible outcomes, 
  // which are correct word, almost correct word and of course wrong word
  const isCorrect = correctWord.toUpperCase()[letterPos] === word;
  const isAlmostCorrect = !isCorrect && word !== "" && correctWord.toUpperCase().includes(word);

  // so below the state of the word will determined by 3 different colors, I used scss and id state for that
  // correct letters, will show green, almost correct will show greenyellow and wrong will of course show red
  const wordColor = wordTry.attempt > attemptVal && (isCorrect ? "correct" : isAlmostCorrect ? "almost" : "error");

  useEffect(() => {
    if (word !== "" && !isCorrect && !isAlmostCorrect) {
      console.log(word);
      setDisabledLetters((previousWord) => [...previousWord, word]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordTry.attempt]);

  return (
    <div className="word-letter" id={wordColor.toString()}>
      {word}
    </div>
  );
}

export default Word;

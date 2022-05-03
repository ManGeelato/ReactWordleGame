import "./App.css";
import Grid from "./components/Grid/Grid";
import Keyboard from "./components/Keyboard/Keyboard";
import { layout, getWords } from "./components/Assets/Layout";
import React, { useState, createContext, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GameOver from "./components/GameOver/GameOver";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Help from './components/Assets/Help'

// we need to have the context in other files too so we create the Context then wrap the 
// other components inside the WordleContext
// now everything that is inside WorldeContext will have the states that we're going to pass using 
// useState since we're passing in, gridWords and setGridWords state
export const WordleContext = createContext();

function App() {
  // this is the state for the grid
  const [grid, setGrid] = useState(layout);

  // this is the state for the trials of a word
  const [wordTry, setWordTry] = useState({ attempt: 0, letter: 0 });

  // this is the state that receives and  changes all words from txt file via getWords method
  const [totalWordleWords, setTotalWordleWords] = useState(new Set());

  // this is the state that sets the correctWord from getWords functionality's Math.random logic
  const [correctWord, setCorrectWord] = useState("");

  // when user tries to guess the word, we want to set a state that enables the keyboard to automatically
  // disable letters that are not in the word to be correctly guessed
  const [disabledLetters, setDisabledLetters] = useState([]);

  // this state is when user guesses the word correctly and now we need to ensure game is over
  // in which we set the state of two variables gameFinished and wordGuessed to false first
  const [gameOver, setGameOver] = useState({
    gameFinished: false,
    wordGuessed: false,
  });

  // const correctWord = "RIGHT"


  useEffect(() => {
    getWords().then((words) => {
      console.log(words)
      setTotalWordleWords(words.totalWordleWords);
      setCorrectWord(words.wordToBeGuessed);
    });
  }, []);


  // mwthod that gets called when user clicks Enter passed as context in LetterKey Component
  const onClickEnter = () => {
    if (wordTry.letter !== 5) return;

    // at first current try will be set to an empty string coz of course, user hasn't passed anything in there yet
    let currentTry = "";
    for (let i = 0; i < 5; i++) {
      // here we give current try value of the grid attempt
      currentTry += grid[wordTry.attempt][i];
    }
    // here we use javascript function has to check if the currentTry is a word available in totalWordleWords
    // returned from getWords function via useEffect
    if (totalWordleWords.has(currentTry.toLowerCase())) {
      setWordTry({ attempt: wordTry.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }

    // here if the current try is actually equal to the correct word, then we set setGameOver object variables
    // to true

    console.log("Current Try is: " + currentTry);
    console.log("Correct Word is" + correctWord);
    if (currentTry.toUpperCase() === correctWord.toUpperCase()) {
      console.log("this is " + gameOver.wordGuessed)
      // setCorrectWord(correctWord)
      setGameOver({ gameFinished: true, wordGuessed: true });
      return;
    }
    console.log(wordTry);
    if (wordTry.attempt === 5) {
      setGameOver({ gameFinished: true, wordGuessed: false });
      return;
    }
  };

  // mwthod that gets called when user clicks DEL passed as context in LetterKey Component
  const onClickDelete = () => {
    if (wordTry.letter === 0) return;
    const newBoard = [...grid];
    newBoard[wordTry.attempt][wordTry.letter - 1] = "";
    setGrid(newBoard);
    setWordTry({ ...wordTry, letter: wordTry.letter - 1 });
  };

  // mwthod that gets called when user clicks keyboard-letters passed as context in LetterKey Component
  const onClickLetter = (key) => {
    if (wordTry.letter > 4) return;
    const newBoard = [...grid];
    newBoard[wordTry.attempt][wordTry.letter] = key;
    setGrid(newBoard);
    setWordTry({
      attempt: wordTry.attempt,
      letter: wordTry.letter + 1,
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route exact path="/help" element={<Help />} />
        </Routes>

        <WordleContext.Provider
          value={{
            grid,
            setGrid,
            wordTry,
            setWordTry,
            correctWord,
            onClickLetter,
            onClickDelete,
            onClickEnter,
            setDisabledLetters,
            disabledLetters,
            setGameOver,
            gameOver,
          }}
        >
        <div className="layout">
          <Grid />
         {/* now here we put a condition to say if game is not yet over, we show Keyboard component else
         if it's over, we show the GameOver component */}
         {gameOver.gameFinished ? <GameOver /> : <Keyboard />}
        </div>
      </WordleContext.Provider>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

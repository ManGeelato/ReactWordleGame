import React, { useCallback, useEffect, useContext } from "react";
import LetterKey from "../LetterKey/LetterKey";
import { WordleContext } from "../../App";
import './Keyboard.scss'

function Keyboard() {
  // In this keyboard I am gonna use the QWERTY keyboard 
  // we're gonna map through each array items so we can pick a letter individually when user clicks
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I","O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    disabledLetters, currentAttempt, gameOver, onClickLetter, onClickEnter, onClickDelete} = useContext(WordleContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameFinished) return;
      if (event.key === "Enter") {
        onClickEnter();
      } else if (event.key === "Backspace") {
        onClickDelete();
      } else {
        firstRow.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onClickLetter(key);
          }
        });
        secondRow.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onClickLetter(key);
          }
        });
        thirdRow.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onClickLetter(key);
          }
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentAttempt]
  );

  // this functionality is for when a user clicks down a key, we want to add 
  // an event listener that listens on key down
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  console.log(disabledLetters);
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="keyboard-firstRow">
        {/* the component LetterKey contains props of keyValue 
        that we need for every keyboard key so we pass it as props after mapping first */}
        {firstRow.map((key) => {
          // here we pass the logic to say if the letter passed by user is disabled then
          // it blurs orangered color on keyboard
          return <LetterKey keyValue={key} isDisabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="keyboard-secondRow">
        {/* the component Key contains props of keyValue 
        that we need for every keyboard key so we pass it as props after mapping first */}
        {secondRow.map((key) => {
          // here we pass the logic to say if the letter passed by user is disabled then
          // it blurs orangered color on keyboard
          return <LetterKey keyValue={key} isDisabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="keyboard-thirdRow">
        {/* the component Key contains props of keyValue 
        that we need for every keyboard key so we pass it as props after mapping first */}
        <LetterKey keyValue={"ENTER"}  />
        {thirdRow.map((key) => {
          // here we pass the logic to say if the letter passed by user is disabled then
          // it blurs orangered color on keyboard
          return <LetterKey keyValue={key} isDisabled={disabledLetters.includes(key)} />;
        })}
        <div className="delete">
          <LetterKey keyValue={"DEL"}/>
        </div>
      </div>
    </div>
  );
}

export default Keyboard;

import React, { useContext } from "react";
import { WordleContext } from "../../App";
import './LetterKey.scss';

function LetterKey({ keyValue, isDisabled }) {

  const { gameOver, onClickLetter, onClickDelete, onClickEnter } = useContext(WordleContext);

  const onWordSubmit = () => {
    if (gameOver.gameFinished) return;

    if (keyValue === "ENTER") {
      onClickEnter();
    } else if (keyValue === "DEL") {
      onClickDelete();
    } else {
      onClickLetter(keyValue);
    }
  };

  return (
    <div
      className="key"
      id={isDisabled && "disabled"}
      onClick={onWordSubmit}
    >
      {keyValue}
    </div>
  );
}

export default LetterKey;

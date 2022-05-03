// In here we gonna create a matrix of words because we need to 
// have an array storing all the words we're going to use
import wordleWords from "./wordleWords.txt";

export const layout = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// we gonna use async and await and javascript Sets for the below functionality
export const getWords = async () => {
  let totalWordleWords;
  let wordToBeGuessed;
  // fetching words from wordleWords.txt file that imported above
  await fetch(wordleWords)
    .then((response) => response.text())
    .then((result) => {
      // we convert the words received from the file into an array
      // and use array property split so we get words one by one not a whole string
      const wordArray = result.split("\n");
      // here we're using Math.random functionality to pick any random word for us to be correctly guessed by the user
      wordToBeGuessed = wordArray[Math.floor(Math.random() * wordArray.length)];
      // we pass the words into a set to avoid repetition
      totalWordleWords = new Set(wordArray);
    });
  return { totalWordleWords, wordToBeGuessed };
};

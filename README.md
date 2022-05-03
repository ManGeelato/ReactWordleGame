/***WORDLE Application***/

this is react wordle application
In this application we have 8 components.
The Navbar component showcases the HomePage(WORDLE) and the (HELP) component

We have the Assets folder that contains Help.js compnent explaining to the user how to play the game
We have wordleWords.txt that contains close about 2400 wordle words in text file
We have Layout.js that contains a 6 * 5 matrix we're going to use on our keyboard

We have the Grid.js that showcases the attempts and position per each trial
Inside of each row, we bind the Letter component because when user clicks on each Letter, we need to collect the letters clicked and check if the total word typed from those letters is correct or not. 

We have the Keyboard.js component in which we have about three rows with the QWERTY keyboard layout
In here, when user clicks Enter on the keyboard, there's a method we call that updates the word typed out.
When user clicks Del or Backspace, it deletes the letter that was typed
For keyboard to be responsive, I used eventlistener 

Then we have the Word.js component. In here that's where magic happens.
Firstly we create a variable that receives the word from keyboard grid
We then compare to check if that word is either correct or almost correct by using correctWord variable from useContext
We then update the color of the keyboard letters depending on if the user either guessed correct, wrong or almost correct.

To run this application, ensure you have nodejs javascript runtime environment installed on your laptop, also chrome web browser

In the folder where you download this application, run npm install because there are dependencies you might need before running npm start.

Thank You
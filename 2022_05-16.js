//https://www.codewars.com/kata/5a360620f28b82a711000047/solutions/javascript/me/best_practice

function defineSuit(card) {
  //Parameters: A string called 'card'. It usually has a number at index 0 and a shape at index 1.
  //
  //Return: A string that is the suit of the card parameter
  //
  //Examples(3): 
  //
  //Pseudocode: 
  //switch statement
    switch(card[card.length-1]) {
        case '♣':
          return 'clubs';
          break;
        case '♦':
          return 'diamonds';
          break;
        case '♥':
          return 'hearts';
          break;
        case '♠':
          return 'spades';
          break;
    }
}
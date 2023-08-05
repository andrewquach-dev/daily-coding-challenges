//https://www.codewars.com/kata/57d29ccda56edb4187000052/train/javascript

const MATCH = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

function rpsls(pl1, pl2) {
  return MATCH[pl1].indexOf(pl2) >= 0
    ? "Player 1 Won!"
    : MATCH[pl2].indexOf(pl1) >= 0
    ? "Player 2 Won!"
    : "Draw!";
}

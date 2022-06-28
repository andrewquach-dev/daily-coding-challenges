//https://www.codewars.com/kata/593b1909e68ff627c9000186/solutions/javascript?filter=me&sort=best_practice

function nicknameGenerator(name) {
  //code goes here
  return name.length < 4 ? 'Error: Name too short' : ['i', 'e', 'a', 'o', 'u'].includes(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
}
//https://www.codewars.com/kata/57ee24e17b45eff6d6000164/solutions/javascript?filter=me&sort=best_practice

function catMouse(x) {
  //P: x is string

  //R: 'Escaped!' if more than 3 character else 'Caught!'

  //E(3): 
  //catMouse('C....m'), "Escaped!"
  //catMouse('C..m'), "Caught!"
  //catMouse('C.....m'), "Escaped!"

  //P: 
  //turn x into array
  //filter out C and m
  //if length of x is > 3 return escape else if its 3 return caught

  x = x.split('').filter(e => e === '.');
  return x.length > 3 ? 'Escaped!' : 'Caught!'
}
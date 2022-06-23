//https://www.codewars.com/kata/535474308bb336c9980006f2/solutions/javascript?filter=me&sort=best_practice

var greet = function (name) {
  //P: name is a string

  //R: string  with 'Hello ', name and '!'

  //E(3): 
  //"riley" --> "Hello Riley!"
  //"JACK"  --> "Hello Jack!"

  //P: 
  //return 'Hello ' + name+ '!'

  return `Hello ${name.charAt(0).toUpperCase() + name.slice(1, name.length).toLowerCase()}!`

};
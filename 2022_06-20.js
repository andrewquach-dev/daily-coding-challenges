//https://www.codewars.com/kata/559e5b717dd758a3eb00005a/solutions/javascript?filter=me&sort=best_practice

function dropCap(n) {
  //P: n which is a string
  //R: string which is n but every word thats greater than 2 has first letter capitlized
  //E(3):
  //"apple"            => "Apple"
  //"one   space"      => "One   Space "
  //"   space WALK   " => "   Space Walk   " 
  //P:
  //turn n string into array split at every space
  //map each string in array
  // manipulate if length is less then 2
  // if it is then take string at [0] and capitlize
  //and slice at 0 to length and lowercase it
  // assign the string to that
  //return above
  return n.split(' ').map((str) => {
    if (str.length > 2) {
      str = str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
    }
    return str;
  }).join(' ');



}
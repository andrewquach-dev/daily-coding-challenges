//https://www.codewars.com/kata/580a1a4af195dbc9ed00006c/solutions/javascript?filter=me&sort=best_practice

function equalize(array) {
  //array of numbers

  //array of strings

  //[20,30,35,10] => ["+0","+10","+15","-10"]
  //[10,12,24,50,0,15,20] => ["+0","+2","+14","+40","-10","+5","+10"]

  //map array by subtracting every value,turning every value into string, then adding + if it doesnt have -

  console.log(array);
  return array
    .map((n) => (n -= array[0]))
    .map((n) => n.toString())
    .map((s) => (!s.includes("-") ? "+" + s : s));
}

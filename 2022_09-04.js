//https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript

function stringTransformer(str) {
  //str is a string that can contain multiple words thats space separated
  //a string that reverse str and every lower case letter turns into uppercase and vice versa
  //turn str into array
  //reverse array
  //map each string by turning them into arrays and mapping within
  //upper to lower and lower to upper for each char
  //join into string

  return str
    .split(" ")
    .reverse()
    .map(
      (word) =>
        (word = word
          .split("")
          .map(
            (c) =>
              (c = c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())
          )
          .join(""))
    )
    .join(" ");
}

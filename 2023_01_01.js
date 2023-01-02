//https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript

function getSumOfDigits(integer) {
  let num = Number(integer).toString().split('');
  return num.map((element) => Number(element)).reduce((a,b) => a+b, 0);
}
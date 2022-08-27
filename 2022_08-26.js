//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
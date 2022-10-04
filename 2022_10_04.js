//https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

function tidyNumber(n) {
  //your code here
  let temp = n.toString().split("");
  for (let i = 0; i < temp.length - 1; i++) {
    if (Number(temp[i]) > Number(temp[i + 1])) {
      return false;
    }
  }
  return true;
}

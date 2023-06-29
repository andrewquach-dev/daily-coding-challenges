//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

function validBraces(braces) {
  let matches = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  let currentChar;

  for (let i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      stack.push(currentChar);
    } else {
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

//https://www.codewars.com/kata/5e96332d18ac870032eb735f

function womensAge(n) {
  return `${n}? That's just ${20 + (n % 2)}, in base ${Math.floor(n / 2)}!`;
}

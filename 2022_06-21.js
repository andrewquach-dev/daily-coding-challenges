//https://www.codewars.com/kata/585b1fafe08bae9988000314/solutions/javascript?filter=me&sort=best_practice

function explode(s) {
  return s.split('').map(s => Number(s)).map(n => n.toString().repeat(n)).join('');
}
//https://www.codewars.com/kata/57f759bb664021a30300007d/solutions/javascript?filter=me&sort=best_practice

function switcheroo(x) {
  return x.split('').map(ele => ele === 'a' ? ele = 'b' : ele === 'b' ? ele = 'a' : ele).join('');
}
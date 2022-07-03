//https://www.codewars.com/kata/5b358a1e228d316283001892/solutions/javascript?filter=me&sort=best_practice

function getStrings(city) {
  city = city.toLowerCase().split('').reduce((a, e) => {
    if (e in a) {
      a[e]++;
    } else if (e !== ' ') {
      a[e] = 1;
    }
    return a;
  }, {})
  let ans = [];
  for (c in city) {
    ans.push(`${c}:${'*'.repeat(city[c])}`)
  }
  return ans.join(',');
}
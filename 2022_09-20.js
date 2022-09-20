//https://www.codewars.com/kata/58381907f8ac48ae070000de/solutions/javascript

function isLanguageDiverse(list) {
  const arr = list.map((v) => v.language);
  const obj = {};
  arr.map((v) => (obj[v] = obj[v] ? obj[v] + 1 : 1));
  const count = Object.values(obj).sort((a, b) => b - a);
  const max = count.splice(0, 1);
  return count.every((v) => v * 2 >= max);
}

// /https://www.codewars.com/kata/5983cba828b2f1fd55000114

function oddOne(arr) {
  const oddIndex = arr.findIndex((e) => e % 2 !== 0);
  return oddIndex !== -1 ? oddIndex : -1;
}

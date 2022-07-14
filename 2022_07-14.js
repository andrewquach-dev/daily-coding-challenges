//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/solutions/javascript?filter=me&sort=best_practice

function highestRank(arr) {
  //Parameters: arr is array of numbers

  //Returns: number which is most frequent. If tie then return largest

  //Examples(3):
  //[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
  //[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
  //[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

  //Pseudocode:
  //turn arr into object. the key will be element and val will be occurence
  //turn object into array
  //sort greatest to least
  //return first element

  return Object.entries(
    arr.reduce((a, e) => {
      if (e in a) {
        a[e]++;
      } else {
        a[e] = 1;
      }
      return a;
    }, {})
  )
    .sort(([, a], [, b]) => b - a)
    .filter(
      (e) =>
        e[1] ===
        Object.entries(
          arr.reduce((a, e) => {
            if (e in a) {
              a[e]++;
            } else {
              a[e] = 1;
            }
            return a;
          }, {})
        ).sort(([, a], [, b]) => b - a)[0][1]
    )
    .map((a) => (a[0] = [Number(a[0]), a[1]]))
    .sort(([a], [b]) => b - a)[0][0];
}

//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  // The function code should be here
  return string.split("").reduce((a, e) => {
    if (e in a) {
      a[e]++;
    } else {
      a[e] = 1;
    }
    return a;
  }, {});
}

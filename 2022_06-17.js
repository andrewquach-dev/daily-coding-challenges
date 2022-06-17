//https://www.codewars.com/kata/559e10e2e162b69f750000b4/solutions/javascript/me/best_practice

function dominator(arr) {
  //P: Array of integers
  //R: Integer which is dominator
  //E(3):
  //[3,4,3,2,3,1,3,3]),3
  //[1,2,3,4,5]),-1
  //[1,1,1,2,2,2,2]),2
  //P:
  //create dominator variable
  //reduce the array and create an obj of counts
  //go through the obj and if the count is greater than half the lenght of the array then return it

  let d = -1;
  let obj = arr.reduce((a, e) => {
    if (e in a) {
      a[e]++;
    } else {
      a[e] = 1;
    }
    return a;
  }, {});
  for (let p in obj) {
    if (obj[p] > arr.length / 2) {
      d = p;
    }
  }
  console.log(arr)
  console.log(obj)
  return Number(d);
}
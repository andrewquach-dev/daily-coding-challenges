//https://www.codewars.com/kata/55d2aee99f30dbbf8b000001/solutions/javascript/me/best_practice

//returns the test score
function scoreTest(str, right, omit, wrong) {
  //insert code here
  return str.reduce((a, e) => {
    if (e === 0) {
      a += right;
    } else if (e === 1) {
      a += omit;
    } else if (e === 2) {
      a -= wrong;
    }
    return a;
  }, 0)
}
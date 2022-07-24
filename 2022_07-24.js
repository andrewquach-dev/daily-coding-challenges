//https://www.codewars.com/kata/5925acf31a9825d616000e74/solutions/javascript?filter=me&sort=best_practice

function killcount(counselors, jason) {
  return counselors.filter((e) => e[1] < jason).map((e) => (e = e[0]));
}

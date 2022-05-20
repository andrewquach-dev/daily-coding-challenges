//https://www.codewars.com/kata/5356ad2cbb858025d800111d/solutions/javascript

function capMe(names) {
  return names.map(name =>
    name[0].toUpperCase() + name.slice(1, name.length).toLowerCase())
}
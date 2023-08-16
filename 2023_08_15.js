//https://www.codewars.com/kata/5701800886306a876a001031/train/javascript

function lineupStudents(students){
  return students
    .trim()
    .split(/\s+/)
    .sort((a, b) => b.length - a.length || b.localeCompare(a));
}
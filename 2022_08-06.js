//https://www.codewars.com/kata/58a08e622e7fb654a300000e/train/javascript

const grades = [
  "VB",
  "V0",
  "V0+",
  "V1",
  "V2",
  "V3",
  "V4",
  "V5",
  "V6",
  "V7",
  "V8",
  "V9",
  "V10",
  "V11",
  "V12",
  "V13",
  "V14",
  "V15",
  "V16",
  "V17",
];

function sortGrades(lst) {
  return lst.sort((a, b) => grades.indexOf(a) - grades.indexOf(b));
}

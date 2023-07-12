//https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef

function findChildren(santasList, children) {
  let arr = [];
  for (let item of santasList) {
    for (let child of children) {
      if (item === child && !arr.includes(item)) {
        arr.push(item);
      }
    }
  }
  return arr.sort();
}


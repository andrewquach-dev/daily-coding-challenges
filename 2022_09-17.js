//https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

function addUsername(list) {
  return list.map(o => {
    o.username = o.firstName.toLowerCase() + o.lastName.toLowerCase().slice(0, 1).toLowerCase() + (new Date().getFullYear() - o.age)
    return o
  })
}
//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  return x.split(' ').reduce((max, w) => {
    if (w.split('').reduce((a, e) => a += e.charCodeAt(0) - 96, 0) > max.split('').reduce((a, e) => a += e.charCodeAt(0) - 96, 0)) {
      max = w
    }
    return max
  }, "")
}
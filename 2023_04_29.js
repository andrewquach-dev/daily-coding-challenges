//https://www.codewars.com/kata/555b73a81a6285b6ce000047

function add() {
    for (var n = 0, i = 0; i < arguments.length; i++) {
      n += arguments[i] * (i + 1)
    }
    
    return n
  }


//https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript

function search(budget, prices) {

  // return array of prices that are within budget
    return prices.filter(p=> p<=budget).map(ele=>ele.toString()).sort((a,b)=>a-b).join(',');
  }
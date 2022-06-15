//https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/solutions/javascript/me/best_practice

function stantonMeasure(a){
  return a.filter(ele=>ele==a.filter(ele=>ele===1).length).length
}
//https://www.codewars.com/kata/559d7951ce5e0da654000073/solutions/javascript/me/best_practice

function alternateSqSum(arr){
  // happy coding :D
  return arr.filter((ele,i)=>i%2!==0).reduce((a,ele)=>a+= Math.pow(ele,2),0) + arr.filter((ele,i)=>i%2===0).reduce((a,ele)=>a+ele,0)
}
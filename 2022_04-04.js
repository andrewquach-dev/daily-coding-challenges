//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {

  return a.reduce((a,n)=>a+=Math.pow(n,2),0)>b.reduce((a,n)=>a+=Math.pow(n,3),0)?true: false;

}
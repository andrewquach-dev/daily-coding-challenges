// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07 Over The Road.

let hodd = (r,n) => 1 + (r-1)*2; // house odd.
let heven = (r,n) => 2*n - (r-1)*2; // house even.
let rodd = (h,n) => (h+1)/2; // row for odd house.
let reven = (h,n) => (2*n+2-h)/2; //row for even house.

let overTheRoad = (h, n) => {
  //console.log("Start",h,n);
  if(0 == n%2){
    var r = reven(h,n);
    var ans = hodd(r,n);
    //console.log(`Even house ${h} and row us ${r}, next house is ${ans}.`);
    return ans;
  }
  var r = rodd(h,n);
  var ans = heven(r,n);
  //console.log(`Odd house ${h} and row us ${r}, next house is ${ans}.`);
  return ans;
}
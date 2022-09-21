//

// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function max(str){
  return Object.entries(str.split('').reduce((a,e)=>{
    if(e in a){
      a[e]++
    }else{
      a[e]=1
    }
    return a
  },{})).sort((a,b)=>b[1]-a[1])[0][0]

}
console.log(max('sssddwaaaaa'))
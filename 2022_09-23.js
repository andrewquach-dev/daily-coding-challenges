// Given a phrase, reverse the order of the characters of each word.

// describe("Reverse Words", () => {
//  it("Should reverse words", () => {
//   assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
//  });
// });

// No Reverse Method! Unless that is your brute force...

function reverse(str) {
  return str.split(" ").map((w) => (w = w.split("").reverse().join(""))).join(' ');
}

console.log(reverse("andrew") == "werdna");
console.log(reverse("I love JavaScript!") == "I evol !tpircSavaJ");
console.log(reverse("I love JavaScript!"));
console.log(reverse("ball today") == "llab yadot");

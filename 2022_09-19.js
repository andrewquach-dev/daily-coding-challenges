//

// const reverse = (string) => {
//   let result = "";
//   for (let character of string) result = character + result;
//   return result;
// };

const reverse = (string) =>
  string.split("").reduce((result, character) => character + result);

console.log(reverse("andrew"));

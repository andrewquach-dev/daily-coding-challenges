//

const reverse = (string) => {
  let result = "";
  for (let character of string) result = character + result;
  return result;
};

console.log(reverse('andrew'))
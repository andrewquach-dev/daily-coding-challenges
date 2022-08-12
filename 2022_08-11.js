//https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript

function autocomplete(input, dictionary) {
  //input is a string that we are searching for and dictionary is an array of strings
  //array of strings from dictionary that contain input
  //autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
  //return a filtered version of dictionary
  //the condition for filter would be for every element if the element includes the input text return true
  let s = input.replace(/[^a-z]/gi, "");
  return dictionary
    .filter((e) => s === e.slice(0, s.length).toLowerCase())
    .slice(0, 5);
}

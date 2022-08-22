//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  //str is a string

  //same str but with all the vowels removed

  //disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!"
  //disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
  //disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?"

  //split it as array by character
  //filter out element if it matches a vowel

  return str
    .split("")
    .filter((e) => !/[aeiou]/gi.test(e))
    .join("");
}

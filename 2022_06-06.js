//https://www.codewars.com/kata/57d1f36705c186d018000813/solutions/javascript/me/best_practice

function gordon(a) {
  return a.split(' ').map(word => {
    word = word.toUpperCase();
    word += '!!!!';
    word = word.replace(/[a]/gi, '@');
    word = word.replace(/[eiou]/gi, '*');
    return word;
  }).join(' ');
}
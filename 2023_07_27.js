//https://www.codewars.com/kata/5913152be0b295cf99000001/train/javascript

function divisions($, d) {
  let out = 0;
  while ($ >= d) {
    $ = Math.floor($ / d);
    out++;
  }
  return out;
}

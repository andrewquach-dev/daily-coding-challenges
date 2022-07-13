//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

const encryptThis = (text) =>
  text
    .split(" ")
    .map((word) =>
      word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, word.charCodeAt(0))
    )
    .join(" ");

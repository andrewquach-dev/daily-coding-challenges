//https://www.codewars.com/kata/562d8d4c434582007300004e/train/javascript

const obfuscate = email => email.replace(/@/gi, " [at] ").replace(/\./gi, " [dot] ");
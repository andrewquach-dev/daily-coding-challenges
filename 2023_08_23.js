//https://www.codewars.com/kata/570f6436b29c708a32000826/train/javascript

const firstNonRepeated = s => [...s].find(i => s.indexOf(i) == s.lastIndexOf(i)) || null
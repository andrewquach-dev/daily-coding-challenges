//https://www.codewars.com/kata/5a19226646d843de9000007d

function countConsonants(str) {
    return new Set(str.toLowerCase().replace(/[^a-z]|[aeiou]/g, "")).size
}
//https://www.codewars.com/kata/56b71b1dbd06e6d88100092a

const buildFun = n => [...Array(n)].map((v, i) => () => i);
//https://www.codewars.com/kata/5a0d38c9697598b67a000041/train/javascript

function eliminateUnsetBits(number) {
    return parseInt(number.replace(/0/g, '') || 0, 2)
}
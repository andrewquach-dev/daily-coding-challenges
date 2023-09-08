//https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/javascript

const wordPattern = (word) => {
    word = word.toLowerCase()
    const set = [...new Set(word)]
    return word.split('').map(e => set.indexOf(e)).join('.')
}
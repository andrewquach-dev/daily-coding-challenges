//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

function alienLanguage(str) {
    //coding here...
    return str.split(' ').map(word => word = word.slice(0, word.length - 1).toUpperCase() + word[word.length - 1].toLowerCase()).join(' ')
}
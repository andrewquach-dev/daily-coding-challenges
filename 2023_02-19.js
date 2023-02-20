//https://www.codewars.com/kata/59727ff285281a44e3000011/train/javascript

function bandNameGenerator(str) {
    if (str.slice(0, 1) != str.slice(-1)) return 'The ' + str.slice(0, 1).toUpperCase() + str.slice(1)
    return str.slice(0, 1).toUpperCase() + str.slice(1) + str.slice(1)
}
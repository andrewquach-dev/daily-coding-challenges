//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

function toCsvText(array) {
    return array.reduce((a, arr, i) => {
        a += arr.join(',');
        a += (i + 1 === array.length) ? "" : "\n"
        return a;
    }, "")
}
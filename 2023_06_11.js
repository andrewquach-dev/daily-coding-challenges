//https://www.codewars.com/kata/56a6ce697c05fb4667000029

function nextPal(val, n) {
    let num = val;
    while (num != Number(String(n).split('').reverse().join(''))) {
        n = num + 1;
        num++;
    }
    return num;
}
//https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript

function getDecimal(n) {
    //N is decimal number, can be negative

    //N but only the decimal part

    //getDecimal(2.4)  === 0.4
    //getDecimal(-0.2) === 0.2

    //turn into string first
    //check if it contains a .
    //if it doesnt then return 0
    //else 
    //slice array from the .'s index till length
    //return that but add 0 before

    let s = String(n).split('');
    let ans = 0
    if (s.includes('.')) {
        ans = parseFloat('0' + s.slice(s.indexOf('.'), s.length).join(''));
    } else {
        return 0;
    }
    return ans;
}
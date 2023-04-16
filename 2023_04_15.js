//https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript

function isItANum(str) {
    str = str.replace(/[^0-9]/g, '');
    return /^0\d{10}$/.test(str) ? str : "Not a phone number";
}


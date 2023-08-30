//https://www.codewars.com/kata/554ca54ffa7d91b236000023

function binaryToString(binary) {
    return binary.replace(/[01]{8}/g, function (v) {
        return String.fromCharCode(parseInt(v, 2));
    });
}
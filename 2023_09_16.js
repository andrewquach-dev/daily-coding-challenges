//https://www.codewars.com/kata/55736129f78b30311300010f

function pattern(n) {
    var number = "", output = "";
    while (n > 0) {
        number = n + number;
        output = number + (output ? "\n" : "") + output;
        n--;
    }
    return output;
}
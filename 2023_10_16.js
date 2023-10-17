//https://www.codewars.com/kata/59778cb1b061e877c50000cc

function arrAdder(arr) {
    var sentence = "";
    for (var i = 0; i < arr[0].length; i++) {
        for (var j = 0; j < arr.length; j++) {
            sentence += arr[j][i];
        }
        sentence += " ";
    }
    return sentence.trim();
}
//https://www.codewars.com/kata/583af10620dda4da270000c5/train/c

function mergeArrays(a, b) {
    // your code here
    var returnArray = [];
    var counter = 0;
    while (a[counter] || b[counter]) {
        if (a[counter]) {
            returnArray.push(a[counter]);
        }
        if (b[counter]) {
            returnArray.push(b[counter]);
        }
        counter++;

    }
    return returnArray;
}
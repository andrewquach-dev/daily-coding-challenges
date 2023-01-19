//https://www.codewars.com/kata/58880c6e79a0a3e459000004/train/javascript

function houseNumbersSum(inputArray) {
    //coding and coding..
    let sum = 0;
    let i = 0;
    while (true) {
        if (inputArray[i] == 0) {
            break;
        }
        sum += inputArray[i]
        i++;
    }
    return sum
}
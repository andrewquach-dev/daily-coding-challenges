//https://www.codewars.com/kata/5a91a7c5fd8c061367000002/solutions/javascript/me/best_practice

function minimumSteps(numbers, value) {
    //P: Array of integers and an integer

    //R: Integer *Count of how many times you have to add up the smallest numbers in array until its greater
    //or equal to k

    //E(3): 
    //minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
    //

    //P: 
    //declare count
    //sort less to greater
    //go through each number
    //add to sum
    //if greater than value then break

    let count = -1;
    let sum = 0;
    numbers = numbers.sort((a, b) => a - b);
    for (let i in numbers) {
        if (sum >= value) {
            break;
        }
        sum += numbers[i];
        count++;
    }
    return count;
}
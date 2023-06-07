//https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

//P: array of nums, target is single int
//R: array of two indicies that when added up will equal the target
//E:twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
//twoSum([1, 2, 3], 3) // returns [0, 1] or [1, 0]
//twoSum([1, 2, 3], 5) // returns [1, 2] or [2, 1]
//P: create ret array for the indices
// create object




function twoSum(numbers, target) {
    let prevMap = {};
    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i];
        let diff = target - current;
        if (diff in prevMap) {
            return [prevMap[diff], i];
        }
        prevMap[current] = i;
    }
}
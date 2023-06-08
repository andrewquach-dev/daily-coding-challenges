//https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript



function twoSum(numbers, target) {
    //P: numbers array of numbers, target is single num
    //R: array of 2 indicies of nums that when we add the nums will equal target
    //E: [1,2,3] 3 => [0,1]
    //[2,3,4] 7 => [1,2]
    //[10,3,5] 15 => [0,2]
    //P: create a prevObj to store num and its corresponding i
    // go through each num in nums
    // create a diff var to calculate the difference between target and current num
    // if diff is in prevObj
    // return the indices
    // else we'll add the num and it's i

    let prevObj = {}

    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i]
        if (diff in prevObj) {
            return [prevObj[diff], i]
        }
        prevObj[numbers[i]] = i
    }
}
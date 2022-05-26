//https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript


function arrayLeaders(numbers) {
  //P: Array of numbers 

  //R: Array of LEADERS

  //E(3): 
  //arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
  //arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
  //arrayLeaders ({5, 2, -1}) ==> return {5, 2}

  //P: 
  //Create leaders array
  //Go through each element in the array
  //Check if the element is greater than a sliced array sum of its right side
  //if it is then push the element to leaders array
  //return array

  let leaders = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length - 1) {
      if (numbers[i] > 0) {
        leaders.push(numbers[i])
      }
    } else if (numbers[i] >= numbers.slice(i + 1, numbers.length + 1).reduce((a, b) => a + b, 0)) {
      leaders.push(numbers[i])
    }
  }
  return leaders;
}
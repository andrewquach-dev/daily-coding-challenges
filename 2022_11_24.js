//https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript




function averages(numbers) {
  return numbers
    ? numbers
      .map((number, index, array) => (number + array[index + 1]) / 2)
      .slice(0, -1)
    : []
}
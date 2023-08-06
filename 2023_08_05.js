//https://www.codewars.com/kata/57547f9182655569ab0008c4/train/javascript

function replicate(times, number) {
  return times > 0 ? [number, ...replicate(times - 1, number)] : [];
}

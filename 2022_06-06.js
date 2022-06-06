//https://www.codewars.com/kata/57ee31c5e77282c24d000024/solutions/javascript/me/best_practice

function paul(x) {
  let points = {
    'life': 0,
    'Petes kata': 10,
    'kata': 5,
    'eating': 1
  }
  let score = x.reduce((a, e) => a += points[e], 0);
  console.log(score);

  if (score < 40) {
    return 'Super happy!';
  } else if (score < 70 && score >= 40) {
    return 'Happy!';
  } else if (score < 100 && score >= 70) {
    return 'Sad!';
  } else if (score > 100) {
    return 'Miserable!'
  }
}
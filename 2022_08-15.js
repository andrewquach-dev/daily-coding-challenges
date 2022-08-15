//https://www.codewars.com/kata/565f448e6e0190b0a40000cc/train/javascript

function actuallyReallyGood(foods) {
  if (foods.length === 0) {
    return "You know what's actually really good? Nothing!";
  } else if (foods.length === 1) {
    return `You know what's actually really good? ${
      foods[0][0].toUpperCase() + foods[0].slice(1).toLowerCase()
    } and more ${foods[0].toLowerCase()}.`;
  } else {
    return `You know what's actually really good? ${
      foods[0][0].toUpperCase() + foods[0].slice(1).toLowerCase()
    } and more ${foods[1].toLowerCase()}.`;
  }
}

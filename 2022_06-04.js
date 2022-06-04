//https://www.codewars.com/kata/57e8fba2f11c647abc000944/solutions/javascript/me/best_practice

function fireFight(s) {
  return s.split(' ').map(word => word === 'Fire' ? "~~" : word).join(' ')
}
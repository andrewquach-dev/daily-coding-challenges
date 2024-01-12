//https://www.codewars.com/kata/588422ba4e8efb583d00007d

function lateRide(n) {
    let hours = Math.floor(n / 60)
    let minutes = (n - hours * 60)
    return (`${hours}${minutes}`).split('').reduce((a, b) => a + +(b), 0)
}
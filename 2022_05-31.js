//https://www.codewars.com/kata/57f604a21bd4fe771b00009c/solutions/javascript/me/best_practice

function meeting(x) {
    return x.includes('O') ? x.findIndex(ele => ele === 'O') : "None available!";
}
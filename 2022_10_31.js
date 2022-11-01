//https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript

function generateShape(integer) {
    let ans = ""
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer; j++) {
            ans += '+'
        }
        if (i !== integer - 1) {

            ans += '\n'
        }
    }
    return ans;
}
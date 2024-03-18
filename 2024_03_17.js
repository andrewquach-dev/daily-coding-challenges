//https://www.codewars.com/kata/6512b3775bf8500baea77663

function gimmeTheLetters(sp) {
    // Extract the first and last letters from the range
    const [start, end] = sp.split('-')
    // Convert the letters to their ASCII codes
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0)
    // Generate the string of letters
    let result = '';
    for (let i = startCode; i <= endCode; i++) {
        result += String.fromCharCode(i);
    }

    return result;
}
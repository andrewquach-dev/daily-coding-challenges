//https://www.codewars.com/kata/525caa5c1bf619d28c000335

function isSolved(board) {
    board = board.join('-').replace(/,/g, '');
    if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if (/0/.test(board)) return -1;
    return 0;
}
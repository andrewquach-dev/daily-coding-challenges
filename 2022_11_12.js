//https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

function sumCubes(n) {
    return Array.from({ length: n }, (_, i) => (i + 1) * (i + 1) * (i + 1)).reduce((a, b) => a + b, 0)
}
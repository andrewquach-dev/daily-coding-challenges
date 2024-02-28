//https://www.codewars.com/kata/54eb33e5bc1a25440d000891/train/javascript

function decompose(n, n2 = n * n, i = n, prev) {
    while (n2 > 0 && i-- > 1) if (prev = decompose(n, n2 - i * i, i)) return prev.concat([i]);
    return (n2 == 0) ? [] : null;
}
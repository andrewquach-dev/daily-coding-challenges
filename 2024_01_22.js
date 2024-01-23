//https://www.codewars.com/kata/560a4962c0cc5c2a16000068

const eqSumPowdig = (hMax, exp) => {
    const res = [];
    for (let i = 2; i <= hMax; ++i) {
        const sum = [...i + ''].reduce((a, b) => a + (+b) ** exp, 0);
        if (sum === i) res.push(i);
    }
    return res;
};
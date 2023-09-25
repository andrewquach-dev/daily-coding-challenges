//https://www.codewars.com/kata/5966f6343c0702d1dc00004c

const bills = [100, 50, 20, 10, 5, 1];

const giveChange = amount => (
    bills
        .map(value => {
            let result = Math.trunc(amount / value);
            amount = amount % value;

            return result;
        })
        .reverse()
);
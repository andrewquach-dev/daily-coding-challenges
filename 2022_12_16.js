//https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/javascript

function capital(capitals) {
    return capitals.map(c => `The capital of ${c.state || c.country} is ${c.capital}`);
}
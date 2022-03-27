//https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x) {
    let goodCount = 0;
    x.forEach(ele => {
        if (ele === 'good') {
            goodCount++;
        }
    });
    if (goodCount === 1 || goodCount === 2) {
        return "Publish!";
    } else if (goodCount > 2) {
        return "I smell a series!";
    } else {
        return "Fail!";
    }
}
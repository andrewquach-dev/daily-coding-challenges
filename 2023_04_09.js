//https://www.codewars.com/kata/51dda84f91f5b5608b0004cc/train/javascript

function solution(number) {
    var ACount = 0,
        BCount = 0,
        CCount = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            CCount++;
        }
        else if (i % 3 == 0 && i % 5 !== 0) {
            ACount++;
        }
        else if (i % 5 == 0 && i % 3 !== 0) {
            BCount++;
        }
    }


    return [ACount, BCount, CCount];

}
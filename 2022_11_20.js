//https://www.codewars.com/kata/58941fec8afa3618c9000184/train/javascript

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = 0;
    for (var i = 1; ; i++) {
        currentHeight += upSpeed;
        if (currentHeight >= desiredHeight) {
            break;
        }
        else {
            currentHeight -= downSpeed;
        }
    }

    return i;


}
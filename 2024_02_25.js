//https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript

function presses(phrase) {
    var sumpress = 0;
    for (var i = 0; i < phrase.length; i++) {
        switch (true) {
            case (/[1adgjmptw\s]/i.test(phrase[i])):
                sumpress++;
                break;
            case (/[behknqux0]/i.test(phrase[i])):
                sumpress += 2;
                break;
            case (/[cfilorvy]/i.test(phrase[i])):
                sumpress += 3;
                break;
            case (/[sz234568]/i.test(phrase[i])):
                sumpress += 4;
                break;
            case (/[79]/.test(phrase[i])):
                sumpress += 5;
                break;
            default:
                sumpress++;
                break;
        }
    }
    return sumpress;
}
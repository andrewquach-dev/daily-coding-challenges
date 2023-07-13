//https://www.codewars.com/kata/56ba65c6a15703ac7e002075

function findNextPower(val, pow_) {
    let numb = Math.pow(val, 1 / pow_);
    let resNum = Math.ceil(numb) ** pow_;
    if (val === resNum) {
        return (Math.ceil(numb) + 1) ** pow_
    } else {
        return resNum;
    }
}
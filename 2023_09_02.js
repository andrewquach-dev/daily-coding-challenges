//https://www.codewars.com/kata/5857e8bb9948644aa1000246



function determineTime(durations) {
    let sec = 0;
    let str = [];
    for (let i = 0; i < durations.length; i++) {
        str = durations[i].split(":");
        sec += +str[0] * 3600 + +str[1] * 60 + +str[2];
    }
    return sec / 3600 <= 24 ? true : false;
}
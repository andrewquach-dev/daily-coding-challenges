//https://www.codewars.com/kata/5b93fecd8463745630001d05/train/javascript

function snail(height, up, down) {
    if (up <= 0 || down < 0 || height <= 0) return false;
    for (let i = up, j = 0; ; i += up - down, j++) {
        if (i >= height) return j + 1;
    }
}


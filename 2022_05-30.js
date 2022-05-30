//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/solutions/javascript/me/best_practice

function outed(meet, boss) {
    let total = 0;
    let count = 0;
    for (let name in meet) {
        if (name === boss) {
            total += (meet[name] * 2)
        } else {
            total += meet[name]
        }
        count++;
    }
    if (total / count <= 5) {
        return 'Get Out Now!'
    } else {
        return 'Nice Work Champ!'
    }
}
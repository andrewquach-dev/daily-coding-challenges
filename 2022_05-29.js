//https://www.codewars.com/kata/52a6b34e43c2484ac10000cd/solutions/javascript/me/best_practice

function getNiceNames(people) {
    //TODO
    return people.length === 0 ? [] : people.filter(obj => obj.wasNice === true).map(person => person.name);
}

function getNaughtyNames(people) {
    //TODO
    return people.length === 0 ? [] : people.filter(obj => obj.wasNice === false).map(person => person.name);
}
//https://www.codewars.com/kata/525d9b1a037b7a9da7000905



function searchNames(logins) {
    return logins.filter(a => a[0].endsWith('_'));
}
//https://www.codewars.com/kata/57fafd0ed80daac48800019f

function remove(s) {
    return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
}
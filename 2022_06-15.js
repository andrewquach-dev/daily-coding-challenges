//https://www.codewars.com/kata/55c9fb1b407024afe6000055/solutions/javascript/me/best_practice

function findEmployeesRole(name) {
  let fName = name.split(' ')[0];
  let lName = name.split(' ')[1];
  let hasIt = false;
  let ans = employees.find(obj => {
    if (obj.firstName === fName && obj.lastName === lName) {
      hasIt = true;
      return obj;
    }
  })

  return hasIt ? ans.role : 'Does not work here!';
}
//https://www.codewars.com/kata/582887f7d04efdaae3000090/train/javascript

function findSenior(list) {
  // thank you for checking out the Coding Meetup kata :)
  console.log(
    list.filter((e) => e.age === list.sort((a, b) => b.age - a.age)[0].age)
  );
  return list.filter(
    (e) => e.age === list.sort((a, b) => b.age - a.age)[0].age
  );
}

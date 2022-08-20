//https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript

function askForMissingDetails(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list
    .map((o) => {
      for (let p in o) {
        if (o[p] === null) {
          o.question = `Hi, could you please provide your ${p}.`;
        }
      }
      return o;
    })
    .filter((o) => o.hasOwnProperty("question"));
}

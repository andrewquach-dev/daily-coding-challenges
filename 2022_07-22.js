//https://www.codewars.com/kata/56f5594a575d7d3c0e000ea0/solutions/javascript?filter=me&sort=best_practice

function conferencePicker(citiesVisited, citiesOffered) {
  // your code here
  //p: citiesVisited is an array of strings, citiesOffered is an array of strings
  //r: string
  //e:
  //citiesVisited = ['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'];
  //citiesOffered = ['Stockholm','Paris','Melbourne'];
  //conferencePicker (citiesVisited, citiesOffered);
  // ---> 'Paris'
  //p:
  //find string in offered thats not in vistied and return it

  return citiesOffered.every((c) => citiesVisited.includes(c))
    ? "No worthwhile conferences this year!"
    : citiesOffered.find((c) => !citiesVisited.includes(c));
}

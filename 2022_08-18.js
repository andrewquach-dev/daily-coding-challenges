//https://www.codewars.com/kata/51f082ba7297b8f07f000001/train/javascript

var findInArray = function (array, iterator) {
  // array is an array of elements(could be numbers,strings, etc), and iterator is a function that we'll call on each element

  // the index in which the first element successfully passes the iterator

  //findInArray([1,3,5,6,7], trueIfEven) // should === 3
  //[], trueIfEven) , -1
  //[13,5,3,1,4,5], trueIfValueEqualsIndex) , 4

  //set var
  //go through each element of array
  //apply and check iterator on each element
  //if true set the index to var
  //automatically return -1

  console.log(array);
  console.log(iterator);

  return array.findIndex((e, i) => {
    console.log(iterator(e));
    return iterator(e, i);
  });
};

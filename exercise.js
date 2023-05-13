/*
 
Description: Given an array with different data (strings, booleans and/or numbers),
return an array containing ONLY the repeated data values.

Create a function that 
    - receives an array, else returns the message 'Please enter an array'
    - returns an array containing ONLY the repeated data values, in the order they were repeated

Examples:

func([]) => output []
func('hola') => output 'Please enter an array'
func([1,2,3,2,3,5,2]) => output [ 2,3 ]
func([true, false, 'true', false]) => output [ false ]
func(['js','hola','false',2,1,false,'hola',2,'',true,'']) => output [ 'hola', 2, '' ]

 */

/** DO NOT CHANGE THE FUNCTION NAME **/
const getRepeated = (array) => {
  /* Only make changes below this comment */

  // Check if the input is an array
  if (!Array.isArray(array)) {
    return "Please enter an array";
  }
  // Array to store the repeated values
  let repeatedValues = [];
  // Object to keep track of values
  let values = {};

  // Iterate over the array elements
  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    // Use a combination of the element's value and its type
    let elementKey = typeof element + " " + element;

    // Check if the value has been iterated before
    if (values[elementKey]) {
      // If the value is repeated and not already in the repeatedValues array, push it
      if (
        values.hasOwnProperty(elementKey) &&
        !repeatedValues.includes(element)
      ) {
        repeatedValues.push(element);
      }
    } else {
      //label the element as found
      values[elementKey] = true;
    }
  }
  return repeatedValues;

  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.getRepeated = getRepeated;

array1 = [1, 2, 3, 2, 3, 5, 2];
array2 = [true, false, "true", false];

console.log(getRepeated(array1));
console.log(getRepeated(array2));

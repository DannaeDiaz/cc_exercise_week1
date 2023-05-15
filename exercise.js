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
  if (Array.isArray(array)) {
    const counter = new Map();
    const repitedValues = [];
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const quantity = counter.get(value) || 0;
      counter.set(value, quantity + 1);
    }
    counter.forEach((frequency, value) => {
      if (frequency > 1) {
        repitedValues.push({ value: value, frequency: frequency });
      }
    });
    const orderedValues = repitedValues.map((item) => item.value);
    return orderedValues;
  } else {
    return "Please enter an array";
  }

  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.getRepeated = getRepeated;

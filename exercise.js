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

  // Check if is an array
  if (!Array.isArray(array)) {
    return 'Please enter an array';
  }

  // hHow many times each item in the array appears
  const counts = new Map();
  // Where all the repeated character will be
  const repeated = [];

  // Loop over each item in the array
  // And for each item it gets the current count from the Map() 
  for (const item of array) {
    const count = counts.get(item) || 0;
    counts.set(item, count + 1);
    // If the current count is equal to 1 the item has already appeared in the array
    if (count === 1) {
      // Add to the repeated items array
      repeated.push(item);
    }
  }

  return repeated;
  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.getRepeated = getRepeated;

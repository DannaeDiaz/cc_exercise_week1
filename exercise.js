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
  if (Array.isArray(array)) { //Checking if the input is an array


  const arrayLength = array.length
  let repetitionArray = [] //variable to contain the elements with a repeated value
  for ( let i = 0; i<arrayLength;i++){ //checking every element for a repeated value
    for (let j=i+1; j<<arrayLength; j++){ //checking if the rest of the elements in the array are a repeated value
      if (array[i]=== array[j]){ //checking if a pair of elements in the array are equal
        repetitionArray.push(array[i]) //If equality holds, we add the element to the array of repeated elements
        break
      }
    }
    
  }

  repetitionArray = repetitionArray.filter((item, //we delete repeated values
    index) => repetitionArray.indexOf(item) === index);
  
    return repetitionArray}

  else{ return 'Please enter an array'}

  
  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.getRepeated = getRepeated;

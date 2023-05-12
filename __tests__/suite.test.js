const { getRepeated } = require('../exercise');

test('Testing the function exercise', () => { 
    expect(getRepeated()).toBeDefined();
    expect(getRepeated('')).toBe('Please enter an array')
    expect(getRepeated(2)).toBe('Please enter an array')
    expect(getRepeated(true)).toBe('Please enter an array')
    expect(getRepeated([])).toEqual([])
    expect(getRepeated([1,2,3,4,5,6])).toEqual([])
    expect(getRepeated([1,5,2,5,5,7,4])).toEqual([5])
    expect(getRepeated([1,-5,2,-5,5,7,4])).toEqual([-5])
    expect(getRepeated([1,2,2,3,3,3,3,2])).toEqual([2,3])
    expect(getRepeated(['js','hola','false',2,1,5,false,'hola', 2, true, '', ''])).toEqual(['hola',2,''])
 })
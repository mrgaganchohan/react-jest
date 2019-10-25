

const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () =>
{
    expect(functions.add(2, 2)).toBe(4);
})
test('Adds 2 + 2 to equal 5', () =>
{
    expect(functions.add(2, 3)).toBe(5);
});
test('Should be null', () =>
{
    expect(functions.isNull()).toBeNull();
});


// Falsify, when you don't care what the value is, as long as the value comes out as 
// false, null, undefined or 0.
test('Should be falsy', () =>
{
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be Brad Traversy object', () =>
{
    expect(functions.createUser()).toStrictEqual({ 
        firstName: 'Brad',
        lastName: 'Traversy'});
});
test('Should be under 1600', () =>
{
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
});


//Regex
test('Admin should be in usernames', () => {
    var usernames = ['john', 'karen', 'admin']
})


//####################### CREATE A FAKE FUNCTION
//CREATE A FAKE FUNCTION
const add = jest.fn(() => 3);

test('add', ()=>{
    expect(add(1,2)).toBe(3);
    expect(add(102,2)).toBe(3);
    // TO MAKE SURE IT ATLEAST RUNS ONCE
    expect (add).toHaveBeenCalledTimes(2);
    // MAKE SURE THAT IT HAS BEEN CALLED WITH PARAMETERS 101 AND 3 
    expect(add).toHaveBeenCalledWith(102, 2)

})
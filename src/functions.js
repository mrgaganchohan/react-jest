const functions = {
    add: (num1, num2) => num1 + num2,
    //Similar to above 
//     add: function (num1, num2) {
//         return num1 + num2;
//     }
    isNull: () => null,
    
    checkValue: (x) => x,

    // returns the object
    createUser: () => {
        const user = { firstName: 'Brad' };
        user['lastName'] = 'Traversy';
        return user;
    }
};

module.exports = functions;
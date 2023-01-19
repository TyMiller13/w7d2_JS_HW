/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

// function toCelcius(temp){
//     return (temp - 32)*(5/9)
// }
const toCelcius = temp => (temp - 32)*(5/9)

console.log(toCelcius(32));
console.log(toCelcius(212));
console.log(toCelcius(50));




/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/
 class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    updatePassword(oldPassword, newPassword){
        if (this.password == oldPassword){
            this.password = newPassword;
            console.log(`Thank you ${this.username}, your password has been updated.`);
        } else {
            return `Password for ${this.username} is incorrect. You cannot update password.`
        }
    }
 }


 let user1 = new User("TyMiller", "abc123");
 console.log(user1);
 console.log(user1.updatePassword("abc123", "123abc")); //correct
 console.log(user1.updatePassword("a1b2c3", "123abc")); //incorrect








/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/


    // function squareNegatives(array){
    //     return array.filter((num) => num < 0).map(num=>num**2)
    // };

    const squareNegatives = array => array.filter(num => num < 2).map(num => num**2)

    console.log(squareNegatives([-10, -3, 4, -2, 8, 9, -3]))
    console.log(squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]))
    console.log(squareNegatives([2, 4, 6, 8, 10]))
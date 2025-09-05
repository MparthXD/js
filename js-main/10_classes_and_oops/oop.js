// A simple object
const userone = {
    username: "Parth",
    logincount: 8,
    sigunedIn: true,

    getUserDetails: function() {
        console.log(`username: ${this.username}`);
    }
};

// Another simple object
const user2 = {
    username: "Parth",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        console.log(`Username: ${this.username}`);
        console.log(this); // 'this' refers to the user2 object here
    }
};

// Calling the method on userone
userone.getUserDetails(); // Output: username: Parth

// Calling the method on user2
user2.getUserDetails(); // Output: Username: Parth, followed by the user2 object

// A constructor function to create objects
function User(username, logincount, isloggedin) {
    this.myusername = username;
    this.loginCount = logincount;
    this.isloggedin = isloggedin;
    return this
    // A method can also be added here
    this.greet = function() {
        console.log(`Hello, ${this.myusername}!`);
    };
}

// Creating a new object using the constructor function
const userThree = new User("John", 15, true);

// Accessing properties and methods of the new object
console.log(userThree.myusername); // Output: John
userThree.greet(); // Output: Hello, John!

const userOne = User("parth", 12,true)
// To log the userone object
console.log(userone);




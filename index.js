function receivesAFunction(callback) {
    callback(); // Call the callback function
}

// Function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function!");
    };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function!");
    };
}
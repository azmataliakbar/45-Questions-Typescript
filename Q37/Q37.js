/*
!Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
// Function for default shirt size and message
function make_shirt2(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("\nShirt size: ".concat(size, ", Message: ").concat(message));
}
// Make a large shirt with the default message
make_shirt2();
// Make a medium shirt with the default message
make_shirt2("Medium");
// Make a small shirt with a different message
make_shirt2("Small", "Hello, World!");

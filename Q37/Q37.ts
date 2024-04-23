/*
!Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
/*
todo=> Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
*/
// Function for default shirt size and message
function make_shirt2(size: string = "Large", message: string = "I love TypeScript"): void {
  console.log(`\nShirt size: ${size}, Message: ${message}`);
}

// Make a large shirt with the default message
make_shirt2();

// Make a medium shirt with the default message
make_shirt2("Medium");

// Make a small shirt with a different message
make_shirt2("Small", "Hello, World!");

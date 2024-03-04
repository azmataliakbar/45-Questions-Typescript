/*Q3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/


// person's name in a variable
var personName3 = "AzMat";

// the person's name in lowercase
console.log("Lowercase:", personName3.toLowerCase());

// the person's name in uppercase
console.log("Uppercase:", personName3.toUpperCase());

// the person's name in Titlecase
console.log("Titlecase:", personName3.charAt(0).toUpperCase() + personName3.slice(1).toLowerCase());

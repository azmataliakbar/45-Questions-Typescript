/*
!Q3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
// person's name in a variable
var personName3 = "AzMat aLI";
// the person's name in lowercase
console.log("\nLowercase:", personName3.toLowerCase());
// the person's name in uppercase
console.log("\nUppercase:", personName3.toUpperCase());
// the person's name in Titlecase
console.log("\nTitlecase:", personName3.charAt(0).toUpperCase() + personName3.slice(1).toLowerCase());
console.log("Titlecase: ", personName3.charAt(6).toUpperCase() + personName3.slice(7, 9).toLowerCase());
console.log("Titlecase: ", personName3.charAt(0).toUpperCase() + personName3.slice(1, 5).toLowerCase() + " " + personName3.charAt(6).toUpperCase() + personName3.slice(7, 9).toLowerCase());

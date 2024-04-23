/*
!Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/
// An array of friends' names
var names2 = ["Albert", "Bobby", "Catharine", "Dominic"];
// Print each person's name by accessing each element in the list, one at a time.
for (var i = 0; i < names2.length; i++) {
    console.log("\nHi, ".concat(names2[i], ", Today, You have to reach airport at 09:30pm."));
}
;
// Example 2
// An array of friends' names
var names3 = ["Albert", "Bobby", "Catharine", "Dominic"];
// Print each person's name by accessing each element in the list,individually
console.log("\nHi, ".concat(names3[0], ", Today, You have to reach airport at 09:30pm."));
console.log("Hi, ".concat(names3[1], ", Today, You have to reach airport at 09:30pm."));
console.log("Hi, ".concat(names3[2], ", Today, You have to reach airport at 09:30pm."));
console.log("Hi, ".concat(names3[3], ", Today, You have to reach airport at 09:30pm."));

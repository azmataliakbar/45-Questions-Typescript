/*
!13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
//? Example 1
// Define an array of favorite transportation examples
var transportation = ["Honda electric bike", "Kawasaki mountain bike", "Suzuki road bike"];
// Print statements about each item in the list
for (var i = 0; i < transportation.length; i++) {
    console.log("\nI would like to own a ".concat(transportation[i], "."));
}
;
//? Example 2
var vehicles = ["KIA Sportage car", "Suzuki Swift car", "Toyota Corolla car"];
vehicles.map(function (items) { return console.log("\nI would like to own a ".concat(items, ".")); });

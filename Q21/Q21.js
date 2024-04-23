/*
!Q21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
// example 1
var car = {
    make: "Toyota",
    color: "Metalic Gray",
    manufacturingYear: 2023
};
console.log("\nCar Info: Company:".concat(car.make, " Color:").concat(car.color, ", Model:").concat(car.manufacturingYear));
// Objects containing different items
var items = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Backpack", category: "Fashion", price: 50 },
    { name: "Book", category: "Education", price: 20 },
    { name: "Headphones", category: "Electronics", price: 100 },
    { name: "Sunglasses", category: "Fashion", price: 80 }
];
// Print out the items
console.log("\nItems:");
items.forEach(function (item) {
    console.log("".concat(item.name, " -: Category: ").concat(item.category, ", Price: $").concat(item.price));
});

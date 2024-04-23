/*
!Q21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/

// example 1

// Car is an object & we write in type script syntax as below:-

let car: { make: string; color: string; manufacturingYear: number } = {
  make: "Toyota",
  color: "Metalic Gray",
  manufacturingYear: 2023
};
// Print out the car details as mentioned in object
console.log(`\nCar Info: Company:${car.make} Color:${car.color}, Model:${car.manufacturingYear}`);


// example 2

// Types for different kinds of item's detail is in an object in Typescript
type Item = {
  name: string;
  category: string;
  price: number;
};

// Here now we have many objects containing item's different details
let items: Item[] = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Backpack", category: "Fashion", price: 50 },
  { name: "Book", category: "Education", price: 20 },
  { name: "Headphones", category: "Electronics", price: 100 },
  { name: "Sunglasses", category: "Fashion", price: 80 }
];

// Print out the items
console.log("\nItems:");
items.forEach(item => {
  console.log(`${item.name} -: Category: ${item.category}, Price: $${item.price}`);
});

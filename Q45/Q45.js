/*
!Q45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
// Example 1
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log("\n", make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log("\n", make_car("Suzuki", "Swift", ["color", "blue"], ["sunroof", true]));
// Example 2
/*
// object with properties
interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: any; // Allow arbitrary additional properties
}

function store_car(manufacturer: string, modelName: string, ...extras: [string, any][]): Car {
  let car: Car = {
      manufacturer: manufacturer,
      modelName: modelName
  };
  
  // Loop through additional name-value pairs and add them to the car object
  for (let [key, value] of extras) {
      car[key] = value;
  }
  
  return car;
}

// The function with required information and additional properties
let myCar: Car = store_car("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Printing the object returned by the function
console.log(myCar); */

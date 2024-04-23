/*
!Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
// Example 1
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("\nOriginal magicians:");
show_magicians(magicians); // Shows original names
console.log("\nGreat magicians:");
show_magicians(greatMagicians); // Shows modified names
// Example 2
/*

// Function describe original array
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
      console.log(magician);
  }
}

// Function modify array and add "The great"
function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
      great_magicians.push(`The Great ${magician}.`);
  }
  return great_magicians;
}

// Array of magician
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// A copy of the array of magician names
let magician_names_copy: string[] = [...magician_names];

// Calling make_great with a copy of the array of magician names
let great_magicians: string[] = make_great(magician_names_copy);

// Calling show_magicians with the original and modified arrays
console.log("\nOriginal Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
 */ 

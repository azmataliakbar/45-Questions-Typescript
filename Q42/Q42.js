/*
!Q42: Great Magicians: Start with a copy of your program from Exercise 39.Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
// example 1
var magicians = ["Harry", "David", "Teller"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log("\n", magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
// example 2
/*
// Function of show_magician as in array
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
      console.log(magician);
  }
}

// Function modify array and adding "The Great"
function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
      great_magicians.push(`The Great ${magician}.`);
  }
  return great_magicians;
}
// Array of magicians
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Calling make_great to modify the array of magicians
let great_magicians: string[] = make_great(magician_names);

// Calling show_magicians to see that the list has been modified
show_magicians(great_magicians);
 */ 

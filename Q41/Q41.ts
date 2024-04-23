/*
!Q41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/


// Array of magicians
const magicianNames: string[] = ["Merlin", "Gandalf", "Harry Potter", "Houdini"];

// Function with for loop to send all magician names one by one
function showMagicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
      console.log("\n", magicians[i]);
  }
}

//printing all magician names
showMagicians(magicianNames);
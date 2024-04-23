/*
!Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/

// The original guest list
let originalGuestList1: string[] = ["Asma Maqsood", "Batool Fatima", "Najma Maqbool", "Sara Mumtaz"];


// Print invitations for the original guest list
// Iterate through the guest list and print invitations
console.log("\nOriginal Guest List:- ");

originalGuestList1.forEach(member => {
  console.log(`Dear ${member}, would you like to join me for dinner?`);
});

// The guest who can't make it
console.log("\nGuest can't attend dinner:- ");
let guestWhoCantMakeIt1 = "Sara Mumtaz";
console.log(`${guestWhoCantMakeIt1} can't make it to dinner.`);

// Replace the guest
let newGuest = "Rashida Latif";
originalGuestList1[originalGuestList1.indexOf(guestWhoCantMakeIt1)] = newGuest;

// Print invitations for the updated guest list
console.log("\nUpdated Guest List:- ");
originalGuestList1.forEach(guest => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

console.log("\n***Great news! I found a bigger dinner table!");

// Adding more  3 guests
originalGuestList1.unshift("Fahmida Parveen");
originalGuestList1.splice(originalGuestList1.length / 2, 0, "Farida Parveen");
originalGuestList1.push("Shahida Parveen");

originalGuestList1.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


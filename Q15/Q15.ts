/*
!Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.*/

// The original guest list
let originalGuestList1: string[] = ["Asma Maqsood", "Batool Fatima", "Najma Maqbool", "Sara Mumtaz"];


// Print invitations for the original guest list
// Iterate through the guest list and print invitations
console.log("\nOriginal Guest List:- ");

originalGuestList1.forEach(member => {
  console.log(`Dear ${member}, would you like to join me for dinner?`);
});

// The guest who can't make it
console.log("\nGuest can't attend dinner.");
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

/*
!Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
*/


// The original guest list
let originalGuestList1: string[] = ["Asma Maqsood", "Batool Fatima", "Najma Maqbool", "Sara Mumtaz"];


// Print invitations for the original guest list
// Iterate through the guest list and print invitations
console.log("\nOriginal Guest List: ");

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
console.log("\nUpdated Guest List: ");
originalGuestList1.forEach(guest => {
console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


// About the bigger dinner table & invitation for more guests.
console.log("\n***Important Note:- Good news! We found a bigger dinner table.");


originalGuestList1.unshift("Fahmida Parveen");
originalGuestList1.splice(originalGuestList1.length / 2, 0, "Farida Parveen");
originalGuestList1.push("Shahida Parveen");

originalGuestList1.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Bigger table didn't arrive
console.log("\nUnfortunately, bigger table didn't arrive, I can only invite two guests for dinner:- ");

while (originalGuestList1.length > 2) {
    let removedGuest = originalGuestList1.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Invitation for 2 guests only
console.log("\nMy invitation for 2 guests: ");

originalGuestList1.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

// Removing all guests & creating an empty guest list of array
console.log("\nTo create an empty list, removed all guests.");

originalGuestList1.splice(0, originalGuestList1.length);
console.log("\n", originalGuestList1); // Shows an empty list

originalGuestList1.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

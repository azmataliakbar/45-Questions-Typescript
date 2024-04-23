/*
!Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
// The guest list
var guestList = ["Asma Maqsood", "Batool Fatima", "Najma Maqbool", "Sara Mumtaz"];
// example 1
// Iterate through the guest list and print invitations
guestList.forEach(function (member) {
    console.log("\nDear ".concat(member, ", would you like to join me for dinner?"));
});
// example 2
for (var i = 0; i < guestList.length; i++) {
    console.log("\nDear ".concat(guestList[i], ", would you like to join me for dinner?"));
}

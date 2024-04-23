/*
!Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var users = []; // Assuming this is your array of users but it is empty
if (users.length === 0) {
    console.log("\nUser array is empty [], We need to find some users!");
}
else {
    // Removed all usernames from the array to print if result.
    console.log("\nI find User in array.");
}

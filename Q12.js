"use strict";
/*Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/


// An array of friends' names
let names2 = ["Albert", "Bobby", "Catharine", "Dominic"];

// Print each person's name by accessing each element in the list
for (let i = 0; i < names2.length; i++) {
    console.log(`Hi, ${names2[i]}, Today, You have to reach airport at 09:30pm.`);
};


/*// Example 2

// An array of friends' names
let names3: string[] = ["Albert", "Bobby", "Catharine", "Dominic"];

// Print each person's name by accessing each element in the list
console.log(`Hi, ${names3[0]}, Today, You have to reach airport at 09:30pm.`);
console.log(`Hi, ${names3[1]}, Today, You have to reach airport at 09:30pm.`);
console.log(`Hi, ${names3[2]}, Today, You have to reach airport at 09:30pm.`);
console.log(`Hi, ${names3[3]}, Today, You have to reach airport at 09:30pm.`);*/

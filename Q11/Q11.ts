/*
!Q11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
*/

// An array of friends' names
let names1: string[] = ["Imran", "Noor", "Shakir", "Yousuf"];

// Print each person's name by accessing each element in the list, one at a time.
for (let i = 0; i < names1.length; i++) {
    console.log("\n", names1[i]);  // to call by console.log() must be inside of 'for' block
};

// Example 2

// An array of friends' names
let names: string[] = ["Imran", "Noor", "Shakir", "Yousuf"];

// Print each person's name by accessing each element in the list, calling each person individually
console.log("\n",names[0]);
console.log("",names[1]);
console.log("",names[2]);
console.log("",names[3]);

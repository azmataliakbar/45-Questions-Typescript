/*Q5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.*/

// the famous person's name and the quote in variables
let famous_person2: string = "Sir Zia";
let quote2: string = "Hello Eric, would you like to learn some Python today?";

// the message
let message2: string = (`\n${famous_person2} said, "${quote2}"`);

// Print the message
console.log(message2);
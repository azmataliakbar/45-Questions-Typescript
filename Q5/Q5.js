/*
!Q5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
*/
//  example1
// the famous person's name and the quote in variables
var famous_person1 = "Albert Einstein";
var quote1 = "\"A person who never made a mistake never tried anything new.\"";
// the message
var message1 = ("\n".concat(famous_person1, " once said, ").concat(quote1));
// Print the message
console.log(message1);
// example2
// the famous person's name and the message in variables
var famous_person2 = "Albert Einstein";
var message2 = "\n".concat(famous_person2, " once said, \"A person who never made a mistake never tried anything new.\"");
// Print the message
console.log(message2);

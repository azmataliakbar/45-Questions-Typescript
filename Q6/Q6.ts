/*Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/

// \n is used for variable next line, \t is used for whitespace after or before variable
let personName5: string = "\n\tPeter Jackson\t\n";
// print variable
console.log(personName5);


// trimming / removing the whitespace after or before variable
let stripped5: string = personName5.trim();
// print variable
console.log(stripped5);


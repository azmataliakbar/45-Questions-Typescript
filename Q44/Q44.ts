/*
!Q44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/


function make_sandwich(...items: string[]) {
    console.log(`\nMaking a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese", "Lettuce");
make_sandwich("Turkey", "Swiss Cheese", "tomato");
make_sandwich("Peanut Butter", "Jelly");




/* // Function describe messages by using if - else condition
function make_sandwich(...items: string[]): void {
    console.log("Sandwich summary:");
    if (items.length === 0) {
        console.log("\nYou ordered an empty sandwich.");
    } else {
        console.log("\nYou ordered a sandwich with the following items:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("\n");
}

// Call the function three times with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss Cheese");
make_sandwich("Peanut Butter", "Jelly");
make_sandwich(); */


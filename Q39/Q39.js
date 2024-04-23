/*
!Q39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan".Call your function with at least three city-country pairs, and print the value that’s returned.
*/
// Function describe city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs
console.log(city_country("\nLahore", "Pakistan."));
console.log(city_country("\nLondon", "United Kingdom."));
console.log(city_country("\nTokyo", "Japan."));

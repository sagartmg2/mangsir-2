let color; //  declaration
color = "red"; // initialzation
color = "white"; // initialzation

let hexCode = "#FFEEE";
// let hexCode = "#FFEEE"; // wrong
hexCode = "#FDEEE";
let rgbCode = "rgba(25,23,5)";

const VALID_ROLE = "admin";

/* data types
    - string
    - number 
    - boolean 
    - null
    - undefined

    /collections
    - array
*/

let price; // undefined
// price = 100
console.log("price", price);

let products = null;
/* code to fetch from api
    products = ["watch","two"]
*/

let a = "ram";
let b = "hari"; // wrong / donot use random varaible names

let friend1 = "abc";
friend1 = "ram"; // re-initaize
let friend2 = "ijk";
let friend3 = "xyz";

console.log("friend1", friend1);

/* Donot Repeat Yourself */
/* Array
    - collection of multiple values
    - collection of similear data-types
    - always starts with index 0 
    syntax
        let <variableName> = [<element1>,<element2>]
        eg:
        let friends = ["abc","ijk","xyz"]
        let friends = [0th, 1st, 2nd index] // in term of index


*/
let friends = ["abc", "ijk", "xyz"];
let evenNumbers = [2, 4, "six", 8, "ten"]; //wrong /// should have similar data-types
/* code */

console.log(friends);
console.log("evenNumber", evenNumbers);

/* accessing the value of arrays element */
let secondIndexValue = evenNumbers[2];
console.log("in 2nd index", secondIndexValue);

console.log("before - in 2nd index", evenNumbers[2]);
/* update/mutate array value/elements */
evenNumbers[2] = 6;
evenNumbers[4] = 10;
console.log("after - in 2nd index", evenNumbers[2]);
console.log("even number", evenNumbers);

let apiData = [];
/* code to call api */
// apiData = [data1,data2]

let fruits = ["apple", null, "orange"]; // TODO: output: ["apple", "kiwi", "orange"]
console.log("before - fruits", fruits);
fruits[1] = "kiwi";
console.log("before 3rd index", fruits[3]); //undefined
fruits[3] = "banana";
console.log("after  3rd index", fruits[3]); // banana
console.log("after - fruits", fruits);


// course = "mern"
// $course = "mern";
// String course = "mern"; java 


let course1 = "mern";
let course1StartTime = 3;
let course1EndTime = 4;
let course1DurationInMonths = 3;
let course1Status = true;

let course2 = "qa";
let course2StartTime = 4;
let course2EndTime = 5
let course2DurationinMonths = 2;
let course2Status = false;

let courses 
/* code here.. */ 

console.log(courses); // information of multiple courses


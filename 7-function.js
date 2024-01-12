let todos = [
  { createdAt: "2080-09-09", name: "html", status: "completed" },
  { createdAt: "2080-09-08", name: "css", status: "completed" },
  { createdAt: "2080-09-07", name: "js", status: "completed" }, // TODO: change this status to pending
];

todos[2].status = "pending";

/* html is completed */
/* css is completed */
/* js is pending */

console.log(todos[0].name + " is " + todos[0].status);
console.log(todos[1].name + " is " + todos[1].status);
console.log(todos[2].name, " is ", todos[2].status);

let todo1 = todos[0];
console.log(
  `${todos[0].name} created at ${todos[0].createdAt} is ${todos[0].status}`
);
console.log(`${todo1.name} created at ${todo1.createdAt} is ${todo1.status}`);

/* string literal  or template litreal 
    back tick ``   above tab 
*/

let firstName = "hari";
let lastName = "bdr";
// let fullName = firstName + " " + lastName;
let fullName = `${firstName} ${lastName}`;

console.log(fullName);

/* function */

/*
    1, 2
    2, 2
    3, 10
    5, 4
 */

let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`the sum of ${num1} and  ${num2} is ${sum}`);

let num3 = 2;
let num4 = 2;
let sum2 = num3 + num4;
console.log(`${num3} + ${num4} = ${sum2}`);
console.log(`the sum of ${num3} and  ${num4} is ${sum2}`);

/* group - function */

// let input1 = 100 ; let input2 = 200

/* to write functional comment
    /** ...  
*/

/**
 * this function calcuates sum of two number
 * @param number input1
 * @param number input2
 */

// at first function call let input1 = 100 ; let input2 = 200
// at second function call let input1 = 1 ; let input2 = 2

function calculateSum(input1, input2) {
  console.log(` ${input1} + ${input2} = ${input1 + input2}`);
}

/* block scope  */
/* calling / executing a function */

calculateSum(100, 200);
calculateSum(1, 2);
calculateSum(5, 10);

console.log("hello", "world");




function double(input){ // input here is called parameter
    console.log(`2 * ${input} = ${2*input}`);
}

double(2) // 2 here is called an arguement
double(10)
double(100)
double(200)

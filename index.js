let todos = [
  { createdAt: "2080-09-09", name: "html", status: "completed" },
  { createdAt: "2080-09-08", name: "css", status: "completed" },
  { createdAt: "2080-09-07", name: "js", status: "completed" }, // TODO: change this status to pending
  { createdAt: "2080-09-07", name: "react", status: "pending" },
];

todos[2].status = "pending";

/* html is completed */
/* css is completed */
/* js is pending */

// console.log(`${todos[0].name} is ${todos[0].status}`);

/* 
    console.log(todos[0].name + " is " + todos[0].status);
    console.log(todos[1].name + " is " + todos[1].status);
    console.log(todos[2].name, " is ", todos[2].status);
    console.log(todos[3].name, " is ", todos[3].status);
*/

function printStatus(index) {
  let name = todos[index].name;
  let status = todos[index].status;
  console.log(`${name} is ${status} for index:${index}`);
}

// printStatus(0) // 0 is arguement
// printStatus(1) // 1 is arguement
// printStatus(2)
// printStatus(3)

/* 
    function 
        - reusable
 */

function printTodoStatus(todo) {
  // todo here is called an parameter
  // for first function call todo = { createdAt: "2080-09-09", name: "html", status: "completed" }
  // for first function call todo = { createdAt: "2080-09-08", name: "css", status: "completed"
  console.log(`${todo.name} created at ${todo.createdAt} is ${todo.status}`);
}

printTodoStatus(todos[0]); // printTodoStatus ( {name:html,....} )
printTodoStatus(todos[1]); // printTodoStatus ( {name:css,....} )
printTodoStatus(todos[2]);
printTodoStatus(todos[3]);

// rating(5) // ⭐⭐⭐⭐⭐
// rating(4.5) // ⭐⭐⭐⭐

// formatDate("2024-01-23-")

/* 
    function typeof(value){

        return
    }
*/

console.log(typeof "hello");
console.log(typeof true); //
console.log(typeof 123);

function customTypeof(value) {
  return "STRING";
  return undefined;
}
console.log(customTypeof(1212));
console.log(customTypeof(true));

function double(input) {
  let output = input * 2;
  return output;
  console.log("do somehting"); // after reutrned once, noting works below it.
}

let doubledvalue = double(1000);
// let doubledvalue = 2000  above code is coverted like this
console.log(doubledvalue);

console.log(double(5));
console.log(double(100));

function sum(input1, input2) {
  return input1 + input2;
}

console.log(double(25));
console.log(sum(50, 100));
console.log(sum(double(25), 100));
console.log(sum(double(25), double(50)));
console.log(sum(double(25), double(sum(25, 25))));




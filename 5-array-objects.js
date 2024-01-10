/* object
    
    let <objectVaraible> = {
        <key>:<value>,
        <key>:<value>,
        <property>:<value>,
        <attribute>:<value>,
    }
*/

let myMobile = {
  brand: "samsung",
  model: "s20",
  color: "white",
};

let myFriendMobile = {
  brand: "apple",
  model: "s20",
  color: "white",
};

// let mobiles = [myMobile, myFriendMobile];

let mobiles = [
  {
    user: "ram",
    brand: {
      name: "samsiung",
      url: "https://www.samsung.com",
    },
  },
  {
    user: "hari",
    brand: "app", // apple
  },
];

// let harisMobile = {
//     user:"hari",
//     brand:"app" // apple
// }
// let harisMobile = mobiles[1]
// console.log(harisMobile.brand);
// harisMobile.brand = "apple"
// console.log(harisMobile.brand);

mobiles[1].brand = "apple";
console.log(mobiles);

let user1 = {
  firstName: "ram",
  middleName: "bdr", // change to bahadur via code
  address: {
    street: "kumari-galli",
    ward: 10,
    province: "3", // change to bagmati via code
  },
  phones: [
    {
      provider: "ntc",
      number: "984XXX", // change to 9840425511 via code
      activatedDate: "2022",
    },
    {
      provider: "ncell",
      number: "984XXX",
      activatedDate: "2023",
    },
  ],
};

/* code here */
user1.middleName = "bahadur";
user1.address.province = "bagmati";
user1.phones[0].number = "984510234";
user1.phones[1].number = "980210234";
console.log(user1.phones[0].number);
console.log(user1);

let todosApiData = {
  data: {
    todos: [
      { title: "html", status: "completed" },
      { title: "css", status: "completed" },
      { title: "js", status: "completed" }, // TODO: change this status to pending
    ],
  },
};

todosApiData.data.todos[2].status = "pending";

/* code here */
/* html is completed */
/* css is completed */
/* js is pending */
        
/* research: function  */



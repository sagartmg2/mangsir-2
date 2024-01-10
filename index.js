let usersData_3 = [
  {
    name: "sita",
    address: [
      {
        name: "ktm",
        type: "temperoy",
      },
      {
        name: "jhap",
        type: "permanent",
      },
    ],
  },
];

let usersData_2 = [
  // this is the most preferred way
  {
    name: "sita",
    address: {
      permanentAdderss: {
        district: "jhapa",
        ward: 1,
      },
      tempAddress: {
        district: "kthmandu",
        ward: 16,
      },
    },
  },
  {
    name: "ram",
    address: {
      permanentAdderss: {
        district: "sindhuli",
        ward: 1,
      },
      tempAddress: {
        district: "kthmandu",
        ward: 16,
      },
    },
  },
];
let usersData_1 = [
  {
    name: "sita",
    permanentAdderss: {
      district: "jhapa",
      ward: 1,
    },
    tempAddress: {
      district: "kthmandu",
      ward: 16,
    },
  },
];

/* 
    course  
        - duration
        - timing
        - students  (multitple)
            - name
            - eductions (multiple) // like SEE,+2,bachelor and their respecitive grades 
            
*/

let courses = ["mern", "qa"]; // TODO change this to above requirement

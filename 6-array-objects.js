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

// let courses = ["mern", "qa"]; // TODO change this to above requirement
let courses = [
  {
    title: "mern",
    duration:"3",
    students:[
      {
        name:"Ram",
        age:20,
        educations:[
          {
            level:"see",
            grade:4,
            passOutYear:2070
          },
          {
            level:"+2",
            grade:3,
            passOutYear:2072
          }
        ]
        // eduction:{
        //   see:{
        //     grade:4,
        //     passOutYear:2079
        //   },
        //   plusTwo:{
        //     grade:4,
        //     passOutYear:2079
        //   },
        // }
      }
    ]
  },
  {
    title: "qa",
    duration:"2"

  },
];

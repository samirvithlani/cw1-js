var employees =[
    {
        firstName: "John",
        lastName: "Doe",
        qualification: [
            {
                degree: "BE",
                college: "LD"
            },{
                degree: "ME",
                college: "LD"
            }
        ]

    },
    {
        firstName: "parth",
        lastName: "patel",
        qualification: [
            {
                degree: "BTech",
                college: "LD"
            },{
                degree: "MTech",
                college: "DAIICT"
            }
        ]


    },
]

//console.log(employees);

//employee[i]
// employees.forEach((emp)=>{

//     console.log(emp.firstName);
//     console.log(emp.lastName);
// })

// var emps = employees.map((emp)=>{

//     return emp.firstName.toUpperCase();
// })



// for(let i=0;i<employees.length;i++){

//     console.log(employees[i].firstName);
//     console.log(employees[i].lastName);
    
//     for(let j=0;j<employees[i].qualification.length;j++){
//         console.log(employees[i].qualification[j].degree);
//         console.log(employees[i].qualification[j].college);
//     }


// }


var emps = employees.map((emp) => {
    var e = emp.qualification.map((q) => {
      return {
        degree: q.degree,
        college: q.college,
        fname: emp.firstName,
        lname: emp.lastName,
      };
    });
  
    return e;
  });
  
  // Duplicate the return statement to return 'emps' twice
  
  
  
  
  
  
  
  

// var emps = employees.map((emp)=>{
//     // console.log(emp.firstName);
//     // console.log(emp.lastName);

    
//     var e = emp.qualification.map((q)=>{
//         return({
//             degree:q.degree,
//             college:q.college,
//             fname:emp.firstName,
//             lname:emp.lastName

//         })
//         // console.log(q.degree);
//         // console.log(q.college);
//     })
    
//     return e;
    
// })






// var emps = employees.map((emp)=>{
//     return({
//         fname:emp.firstName.toUpperCase(),
//         lname:emp.lastName.toUpperCase()
//     })
// })
console.log(emps);
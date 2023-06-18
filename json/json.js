// var student ={
//     name:"ram",
//     age:20,
//     email:"ram@gmail.com",
//     password:"1234",
//     city:"bangalore",
//     pincode:560001,
// }

var student ={
    
    name:"ram",
    age:20,
    email:"ram@gmail.com",
    password:"1234",
    address:{
        city:"bangalore",
        pincode:560001,
        landmark:"near mg road"
    },
    qualification:{
        SSC:{
            marks:80,
            year:2010,
            board:"CBSE"
        },
        HSC:{
            marks:90,
            year:2012,
            board:"CBSE"
        },
        Graduation:{
            marks:80,
            year:2015,
            board:"VTU"
        }
    }
}
console.log(student.name);
console.log(student.age);
console.log(student.address.city);
console.log(student.qualification.HSC.marks);
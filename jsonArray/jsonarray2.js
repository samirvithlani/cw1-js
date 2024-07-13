var users = [
    {
        id:1,
        name:"amit",
        age:23,
        status:true,
        salary:10000,
        skills:["java","python","nodejs"]
    },
    {
        id:2,
        name:"sumit",
        age:24,
        status:false,
        salary:12000,
        skills:["java","python","nodejs","angular"]
    },
    {
        id:3,
        name:"ram",
        age:25,
        status:true,
        salary:15000,
        skills:["java","python","nodejs","angular","react"]
    }
]

// var x = users.filter((user)=>{
//     return user.age>23
// })
// console.log(x)

// var x = users.filter((user)=>{

//     return user.skills.includes("angular")
// })
// console.log(x)

var x = users.find((user)=>user.name=="ram")
console.log(x)
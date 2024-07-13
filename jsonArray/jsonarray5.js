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

const removeEmployee = (id)=>{

    //id =1 != 2 true
    //id = 2 != 2 false
    //id = 3 != 2 true
    return users.filter((user)=>user.id!=id)

}

var x1 = removeEmployee(1)
console.log(x1)



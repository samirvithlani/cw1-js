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

// users.forEach((user,index)=>{
//     console.log(user.id + " " + user.name + " " + user.age + " " + user.status)
// })

users = users.map((user)=>{
    //return user.name
    //return user.name.toUpperCase()
    return {
        id:user.id+1000,
        name:user.name.toUpperCase(),
        age:user.age,
        status:user.status,
        salary:user.salary * 2,
        //skills:user.skills[0].toUpperCase()
        skills: user.skills.map((sk)=>{
            return sk.toUpperCase()
        })
    }
})
console.log(users)
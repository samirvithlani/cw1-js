var userglobal = null;

const fetchUserData =()=>{

    var user ={
        name: 'John',
        age: 25
    }

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(user)
        }, 3000)
    })


}

fetchUserData().then((user)=>{
    userglobal = user;
}).catch((err)=>{
    console.log(err)
})
console.log(userglobal) // null
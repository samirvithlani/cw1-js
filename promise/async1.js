guser =null

const fetchUserData =()=>{

    var user = {
        name: 'John',
        age: 25
    }

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(user)
        },5000)
    })
}

async function getData(){

    var user = await fetchUserData() 
    //till promise is resolved, the execution of the code will be blocked
    guser = user
    console.log(user) 
    console.log(guser)

}

getData() 


var user = {
    name:"raj",
    round:1,
    per:75
}
const roundDetails = (user)=>{

    console.log("roundDetails",user);
}

const science = (user)=>{

    console.log("science",user);
    if(user.round==1){
        roundDetails(user)
    }
}
const comm = (user)=>{
    
    console.log("comm",user);
    if(user.round==1){
        roundDetails(user)
    }
}
const arts = (user)=>{
    
    console.log("arts",user);if(user.round==1){
        roundDetails(user)
    }
}

const admission = (user,cb)=>{

    //
    cb(user)

}

if(user.per>=75){

    admission(user,science)

}
else if(user.per>=65){

    admission(user,comm)
}
else if(user.per>=55){
    
        admission(user,arts)

}

// function demo(){
//     console.log("demo");
//     return "100"
// }
// var x;
// setTimeout(() => {
//      x = demo()    
// }, 1000);



// console.log("x=",x);

function demo(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success")
            //reject("error")
        },2000)
    
    })
                                  
    console.log("promise=",promise);
    promise.then((data)=>{
        console.log("data=",data);
    })
    promise.catch((err)=>{
        console.log("err=",err);
    })


}
//demo()


function fetchDemo(){


    var x =100;
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            //res(x)
            rej("error")
        },2000)
    })
}

// var f = fetchDemo()
// console.log("f=",f);
// f.then((data)=>{
//     console.log("data=",data);
// })
// f.catch((err)=>{
//     console.log("err=",err);
// })

fetchDemo().then((data)=>{
    console.log("data=",data);
}).catch((err)=>{
    console.log("err=",err);
})
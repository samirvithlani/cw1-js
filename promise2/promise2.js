const payment = ()=>{


    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve({
                status:200,
                message:'payment done'
            })
        }, 2000);
    })
}


// var x = payment()
// console.log(x)
// x.then((data)=>{
//     console.log(data)
// })
// x.catch((err)=>{
//     console.log(err)
// })


payment().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})



// const add = ()=>{

//     return 100
// }

// var ans = add()
// console.log(ans)



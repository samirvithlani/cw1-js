//sync
//non sync

/// ---------------------------------------------------------- 
//*undefined*undefined
///*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */


//Promise class:
//pending
//resolve
//reject

// setTimeout(()=>{
//     console.log('non sync')
// },3000)


const getUserData =()=>{

    

    var promise = new Promise((resolve,reject)=>{
        // resolve("data....")
        setTimeout(()=>{
            //resolve("data....")
            reject("payment failed")
        },2000)
    })
    
    console.log(promise)
    promise.then((data)=>{
        console.log(data)
    })
    promise.catch((err)=>{
        console.log(err)
    })


}

getUserData()


// const placeOrder =()=>{

//     payment()
//      setTimeout(()=>{
//         console.log('order placed')
//     },2000)


// }

// const payment =()=>{
    
//     setTimeout(()=>{
//         console.log('payment done')
//     },1000)
// }


// placeOrder()









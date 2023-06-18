
function demo(x){
    console.log("demo",x);
    return x*x;
}

function test(a){

    //console.log(a);
    var ans = a(100)
    console.log(ans);
    return ans;
}


// test(10); // 
// test("ram"); //
// test(10.5); // 
// test(true); //
// test(null); // 
// test(undefined); //
// test([1,2,3,4,5]); //
// test({name:"Ram",age:21}); //
var ans = test(demo); //
console.log(ans); //
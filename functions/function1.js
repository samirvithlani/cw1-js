function demo(){
    console.log("Hello World");
}

function test(){

    return "Hello World";
}

function sum(a,b){

    return a+b;
}


demo();

var x = test();
console.log(x);

var y = sum(10,20);
console.log(y);
console.log(sum(100,200));




const sum1 = (a,b)=>{
    return a+b;
}
console.log(sum1(100,2000));

const add = (a,b)=> a+b;
console.log(add(100,2000));
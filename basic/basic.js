function sum(){
    console.log("sum");
}
const sum2 = () => {
    console.log("sum2");
}
sum();
sum2();

function add(a,b){

    return a+b;
}

var x = add(1,2);
console.log(x);

const add2 = (a,b) => {
    return a+b;
}

const add3 = (a,b) => a+b;

var x = add2(1,2);
console.log(x);
var x = add3(1,20);
console.log(x);

var data = {
    companies :[
        {
            name:"google",
            location:"india",
            employees:[
                {
                    name:"pichai",
                    age:45,
                    salary:100000,
                    job:"ceo",
                    gender:"female"
                },
                {
                    name:"sundar",
                    age:50,
                    salary:120000,
                    job:"ceo",
                    gender:"female"
                }
            ]
        },
        {
            name:"microsoft",
            location:"usa",
            employees:[
                {
                    name:"nadella",
                    age:55,
                    salary:150000,
                    job:"ceo",
                    gender:"female"
                },
                {
                    name:"bill",
                    age:60,
                    salary:200000,
                    job:"ceo",
                    gender:"female"
                }
            ]
        },
        {
            name:"facebook",
            location:"india",
            employees:[
                {
                    name:"mark",
                    age:35,
                    salary:300000,
                    job:"ceo",
                    gender:"male"
                },
                {
                    name:"sheryl",
                    age:40,
                    salary:250000,
                    job:"cto",
                    gender:"female"
                }
            ]
        }
    ]
}

// var x = data.companies.forEach((compnay)=>{
//     console.log(compnay.name)
// })

// data.companies.find((comp)=>comp.name == "google").employees.forEach((emp)=>{
//     console.log(emp.name)
// })

var x1 = data.companies.filter((comp)=>comp.location == "india")
var x2 = x1.map((cmp)=>{
    return cmp.employees.filter((emp)=>emp.job == "ceo")
})
//console.log(x2)


var googleSal = data.companies.find((comp)=>comp.name === "google").employees.reduce((acc,curr)=>acc+curr.salary,0)
console.log(googleSal)


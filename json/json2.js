var hospital ={
    name:"Civil",
    address:{

    },
    detail:{

    },

    paitent:[
        {
            name:"Rahul",
            age:20,
        },
        {
            name:"Ram",
            age:30,
        }
    ],
    doctors:[
        {
            name:"Dr. Amit",
            age:40,
            qualification:{
                degree:"MBBS",
                college:"AIIMS"

            }

        },
        {
            name:"Dr. Parth",
            age:40,
            qualification:{
                degree:"MBBS",
                college:"AIIMS"
                
            }

        }
    ]

}

console.log(hospital)

console.log(hospital.name)

for(let i=0;i<hospital.doctors.length;i++){
    console.log(hospital.doctors[i].name)
    console.log(hospital.doctors[i].qualification.degree)
    console.log(hospital.doctors[i].qualification.college)
}
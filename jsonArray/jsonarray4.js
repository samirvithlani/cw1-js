
var marks = [10,20,30,40,50]
//10,20 = 30
//30 + 30 = 60
var sum = marks.reduce((acc,curr)=>acc+curr,0)
console.log(sum) // 150
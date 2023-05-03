// Write a function that takes an array of objects with a name and age property and returns the average age of all the objects. 
// Use the reduce method to accomplish this.

array=[
    {name:'muthu',age:12},
    {name:'sarvan',age:20},
    {name:'uma',age:28},
    {name:'maruthu',age:24},
    {name:'ponni',age:62},
]

function fname(arr) {
    
    a=arr.reduce((acc,cur)=>acc+cur.age,0)
    return a/arr.length
}
console.log(fname(array))
array=[
    {name:'muthu',salary:12000},
    {name:'ponni',salary:14000},
    {name:'saravan',salary:16000},
    {name:'maruthu',salary:10000},
    {name:'thangam',salary:9000},
]

function fname(arr) {
    return arr.reduce((acc,cur)=>acc+cur.salary,0)
}
console.log(fname(array));
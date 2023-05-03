array=[
    {name:'banaana',price:120,category:'fruit'},
    {name:'orange',price:100,category:'fruit'},
    {name:'apple',price:320,category:'fruit'},
    {name:'mango',price:200,category:'fruit'},
    {name:'graps',price:150,category:'fruit'},    
    {name:'tomato',price:110,category:'veg'},
    {name:'pottato',price:30,category:'veg'},
    {name:'brinjal',price:240,category:'veg'},
    {name:'ladifinger',price:160,category:'veg'},
    {name:'freshlemon',price:20,category:'juice'},
    {name:'fruitmixer',price:15,category:'juice'},
    {name:'rosemilk',price:20,category:'juice'},
    {name:'lesi',price:45,category:'juice'},
]

b=[]
let x= array.reduce((acc,e)=>{
    if (!(e.category in acc)) {
                acc[e.category]=e.price
        }
        acc[e.category]+=e.price
        return acc
},{})
console.log(x)
// c=array.filter(e=>{
//     if (!(e.category in b)) {
//         b[e.category]=[]
//     }
//     b[e.category].push(e)
// })
// console.log(b)

// function fname(d) {
//     return  d.reduce((e,f)=>e+f.price,1);
// }

// console.log(fname(b))

// Write a function that takes an array of objects with a quantity and price property and returns the total cost of all the objects, considering the quantity of each object. 
// Use the reduce method to accomplish this.
array=[
    {name:'chicken',quantity:2,price:30},
    {name:'burker',quantity:5,price:300},
    {name:'thanthuri',quantity:4,price:32},
    {name:'pizza',quantity:6,price:40},
    {name:'chicken role',quantity:1,price:99},
]
function fname(arr) {
    return arr.reduce((c,d)=>c+(d.quantity*d.price),0)
}
b=fname(array);
console.log(b)
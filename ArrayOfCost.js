// Write a function that takes an array of objects with a price property and returns the total cost of all the objects.
//  Use the reduce method to accomplish this.
array=[
    {name:'banaana',price:120},
    {name:'orange',price:100},
    {name:'apple',price:320},
    {name:'mango',price:200},
    {name:'graps',price:150},
]
function fname(arr) {
    return      arr.reduce((c,d)=>c+d.price,0);
}
cost=fname(array)
console.log(cost)

// let total = 0;
 

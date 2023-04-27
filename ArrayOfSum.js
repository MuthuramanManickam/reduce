// Write a function that takes an array of numbers and returns the sum of all the numbers.
//  Use the reduce method to accomplish this.
array =[1,10,30,4,5]
function fname(arr) {
    return arr.reduce((c,d)=>c+d,0);
}
b=fname(array)
console.log(b)



// const arr = [3, 5, 1, 4, 2];
 
// const total = arr.reduce((acc, item) => {
//   return acc + item;
// }, 0);
// console.log(total)
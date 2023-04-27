// Write a function that takes an array of numbers and returns the average of all the numbers. 
// Use the reduce method to accomplish this.
marks=[1,2,3,4,5]
function fname(marks) {
    a=marks.reduce((accu,curre)=>accu+curre,0);
    return a/marks.length;
}
b=fname(marks);
console.log(b);

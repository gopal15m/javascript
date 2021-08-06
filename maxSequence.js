//Kadane’s algorithm
var maxSequence = function (arr) {
if(arr.length){
console.log('test here');
}
return arr.length > 1 ? arr.reduce((a, b) => a + b) : 0;
 let cSum = 0, maxSum = 0;

 if(arr.length === 0){
   return 0;
 }
 arr.forEach(element => {
   cSum = Math.max(element, cSum + element);
   maxSum = Math.max(maxSum, cSum);

 });
 return maxSum;
 };
 console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

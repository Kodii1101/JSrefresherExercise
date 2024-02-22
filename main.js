/* var myArray =[["Jay", 24], ["hey", 84]];
var removedArray = myArray.pop();

myArray.push(["jOHNwICK", 35]);
myArray.unshift(["jOHnWeak", 325])

console.log(removedArray);
console.log(myArray);
 */
let result=[];


function taxThis (a,b){
   const c = .12;
   var ac = 0;
   var bc = 0;
   var ab = 0;

   return{
       ac=a*c
       bc=b*c
       ab=a+b
   }
}

result = taxThis(3500,4500);


console.log(result);
/* var myArray =[["Jay", 24], ["hey", 84]];
var removedArray = myArray.pop();

myArray.push(["jOHNwICK", 35]);
myArray.unshift(["jOHnWeak", 325])

console.log(removedArray);
console.log(myArray);
 */

function taxThis (a,b){
   const c = .12;
   var ac=a*c;
   var bc=b*c;
   var ab=a+b;

    return ac + " " + bc + " " + ab;
}

console.log(taxThis(3500,4500));
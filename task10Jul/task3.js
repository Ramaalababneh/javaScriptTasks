// 1. Write a JS code to print numbers from 1 to 10
for(let i=1 ; i<=10 ; i++)
{
    console.log(i);
}

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr = [13,23,12,45,22,48,66,100]

for(let i=0 ; i<=arr.length-1 ; i++)
{
    if (arr[i]%2 == 0)
    console.log(arr[i]);
}

/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
const arr2=[1,2,3,4,5,6,7,8];
console.log(arr2[0]);
console.log(arr2[0],arr2[1]);
console.log(arr2[0],arr2[1],arr2[2]);
console.log(arr2[0],arr2[1],arr2[2],arr2[3]);
console.log(arr2[0],arr2[1],arr2[2],arr2[3]);
console.log(arr2[0],arr2[1],arr2[2],arr2[3],arr2[4]);
console.log(arr2[0],arr2[1],arr2[2],arr2[3],arr2[4],arr2[5]);
console.log(arr2[0],arr2[1],arr2[2],arr2[3],arr2[4],arr2[5],arr2[6]);
console.log(arr2[0],arr2[1],arr2[2],arr2[3],arr2[4],arr2[5],arr2[6],arr2[7]);
 
// for(let a=1 ; a<=8 ; a++){
//     let sol = " "; 
//     for(let b=1 ; b<=a ; b++){
//         sol += b + " ";
//     }
//     console.log(sol);
// }


 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"
*/
let x = "dont know why";
let result = x.includes("y");
if(result)
console.log("yes");
else
console.log("no");



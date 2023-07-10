/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  
let x = 5;
let y =25; 
if(x>y)
{
    window.alert(x);
}
else 
window.alert(y);

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
let a = 3;
let b =-7;
let c = 2;
if ((a*b*c)>0)
{
    window.alert("the sign is postive");
}
else 

window.alert("the sign is negative");

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  
let a2 = 0;
let b2 = -1;
let c2 = 4 ;
let temp1 ;
let temp2;
let temp3;

if(a2>b2 && a2>c2)
 {
     temp1 = a2 ;
     if(b2>c2) 
     temp2 =b2 ; 
     temp3 = c2 ;    
    }
if(b2>a2 && b2>c2)
{
    temp1 = b2 ;
    if(a2>c2) 
     temp2 =a2 ; 
    temp3 = c2 ;    
       
}  
if(c2>a2 && c2>b2)
{
    temp1 = c2 ;
    if(a2>b2) 
     temp2 =a2 ; 
    temp3 = b2 ;    
       
}     

window.alert(`${temp1} , ${temp2} , ${temp3}`);


 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  let a3 = -5;
  let b3 = -2;
  let c3 = -6;
  let d3 = 0;
  let e3 = -1;
  let tLarge =a3;

  if(a3 > tLarge)
  {
    tLarge=a3;

  }
  if(b3 > tLarge)
  {
    tLarge=b3;

  }
  if(c3 > tLarge)
  {
    tLarge=c3;

  }
  if(d3 > tLarge)
  {
    tLarge=d3;

  }
  if(e3 > tLarge)
  {
    tLarge=e3;

  }
  window.alert(tLarge);


 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let x1 = 5;
let y1 =25; 
if(x1>y1)
{
    window.alert("Hello World");

}
else 
window.alert("Goodbye");
 /******* End Your Code ********* */
/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

const GPA = 81;
switch (true)
{
    case (GPA<50) :
      window.alert("Fail");
        break;
    case (GPA >= 50 && GPA <= 59) :
      window.alert("E");
        break;
    case (GPA >= 60 && GPA <= 69) :
      window.alert("D");
        break;
    case (GPA >= 70 && GPA <= 79) :
    // window.alert("C");
      console.log("C");
        break;
    case (GPA >= 80 && GPA <= 89) :
        window.alert("B");
          break;
    case (GPA >= 90 && GPA <= 100) :
        window.alert("A");
    
}



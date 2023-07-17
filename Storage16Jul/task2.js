let name = document.getElementById("name");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let submit = document.getElementById("submit");
let birthdate = document.getElementById("birthdate");
let yourimg = document.getElementById("yourimg");
let description = document.getElementById("description");
let mauni = document.getElementById("mauni");
let html = document.getElementById("html");
let css = document.getElementById("css");
let java = document.getElementById("java");
let sibling = document.getElementById("sibling");
let desofsibling = document.getElementById("desofsibling");
let div = document.getElementById("div");
let delet = document.getElementById("delet");

let information=[];

if (localStorage != null) {
  information = JSON.parse(localStorage.person);
} else if (localStorage === null) {
  information = [];
}
submit.onclick = function () {
  let info = {
    name: name.value,
    age: age.value,
    gender: gender.value,
    birthdate:birthdate.value,
    yourimg:yourimg.value,
    description:description.value,
    magoranduniversity:mauni.value,
    html:html.value,
    css:css.value,
    java:java,
    sibling:sibling.value,
    desofsibling:desofsibling.value
  };
  information.push(info);
  localStorage.setItem("person", JSON.stringify(information));
  console.log(info);
};


function cardpart1() {
    

  let Card = ` `;
  for (let i = 0; i < information.length; i++) {
    Card += `<div class="card" >
       <p>${information[i].name}</p>
       <p>${information[i].age}</p>
       <p>${information[i].gender}</p>
      </div>
  `;
  document.getElementById("div").innerHTML = Card;

}}
  
function cardpart2() {
    

    let Card2 = ` `;
    for (let i = 0; i < information.length; i++) {
      Card2 += `<div class="card" >
         <p>${information[i].birthdate}</p>
         <p>${information[i].yourimg}</p>
         <p>${information[i].description}</p>
        </div>
    `;
    document.getElementById("div2").innerHTML = Card2;
  
  }}
  function cardpart3() {
    let Card3 = ` `;
    for (let i = 0; i < information.length; i++) {
      Card3 += `<div class="card" >
         <p>${information[i].mauni}</p>
         <p>${information[i].sibling}</p>
         <p>${information[i].desofsibling}</p>
        </div>
    `;
    document.getElementById("div3").innerHTML = Card3;
  
  }}
  // function cardpart4() {
  //   let Card4 = ` `;
  //   if(html.checked && css.checked && css.checked ){
  //   for (let i = 0; i < information.length; i++) {
  //     Card4 += `<div class="card" >
  //        <p>${information[i].mauni}</p>
  //        <p>${information[i].sibling}</p>
  //        <p>${information[i].desofsibling}</p>
  //       </div>
  //   `}}else if(html.checked && css.checked  ){
  //       for (let i = 0; i < information.length; i++) {
  //           Card4 += `<div class="card" >
  //              <p>${information[i].mauni}</p>
  //              <p>${information[i].sibling}</p>
               
  //             </div>
  //         `}
  //   }else if(html.checked ){
  //       for (let i = 0; i < information.length; i++) {
  //           Card4 += `<div class="card" >
  //              <p>${information[i].mauni}</p>
               
  //             </div>
  //         `}
  //   }


  //   document.getElementById("div4").innerHTML = Card4;
  
  // }
  
cardpart1()
cardpart2()
cardpart3()
//cardpart4()








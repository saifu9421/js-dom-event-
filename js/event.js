
// method  1
// <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>

//   method 2 Added a onclick function 
 function cliCk (){
    document.body.style.backgroundColor = "green";
};

//    method 3 Added a onclick function
const makeBlueButton = document.getElementById('make-blue');
 makeBlueButton.onclick =  makeBlue;
 

 function makeBlue (){
    document.body.style.backgroundColor = 'blue';
 }

    //  method 3.5
 const pinkButton  = document.getElementById('make-pink');
   pinkButton.onclick = function(){
    document.body.style.backgroundColor = 'pink';
   }


// option  4
const purpleButton =  document.getElementById('make-purple');
 purpleButton.addEventListener('click',function(){
    document.body.style.backgroundColor = 'purple';
 });

 
//  option 4 Final 
document.getElementById('make-golden').addEventListener('click',
   function(){
    document.body.style.backgroundColor = 'goldenrod';
   })
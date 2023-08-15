// 
function postButton (){
      const input =  document.getElementById('text-comment');
       const inputText  =  input.value;
       const commentContainer  = document.getElementById('new-comment');
       const p =  document.createElement('p');
       p.innerText = inputText;
       commentContainer.appendChild(p);
       input.value ="";

};
//INPUTS

let $Name = document.querySelector('#name');
let $lname =document.querySelector('#lname');
let $Email = document.querySelector('#email');
let $Password =document.querySelector('#password');

//BTN

//botao teste 

let $butao = document.querySelector('#_button');


let $Button = document.querySelector('#button');

$butao.addEventListener('click',()=>{

let inputs = [$Name,$lname,$Email,$Password];
let values = [$Name.value,$lname.value,$Email.value,$Password.value];

    for(let i = 0;i<=4;i++){
        if(!values[i]){
            inputs[i].style.backgroundImage = "url('/images/icon-error.svg')";
            inputs[i].style.backgroundRepeat ='no-repeat';
            inputs[i].style.backgroundPosition = '96%';
        }else{
            inputs[i].style.backgroundImage = "";
        }   
     }

})
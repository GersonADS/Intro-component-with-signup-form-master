//INPUTS

let $Name = document.querySelector('#name');
let $lname =document.querySelector('#lname');
let $Email = document.querySelector('#email');
let $Password =document.querySelector('#password');

//BTN

//botao teste 

let $butao = document.querySelector('#_button');


let $Button = document.querySelector('#button');

let RegEx = RegExp('^[0,9a-zA-Z]{5,10}[@][a-z]{0,10}[.][a-z]{0,5}$');

$butao.addEventListener('click',()=>{
    
    let inputs = [$Name,$lname,$Email,$Password];
    let values = [$Name.value,$lname.value,$Email.value,$Password.value];

    for(let i = 0;i<=4;i++){
        
        if(!values[i]){
            inputs[i].style.border = '2px solid  hsl(0, 100%, 74%)'
            inputs[i].style.backgroundImage = "url('/images/icon-error.svg')";
            inputs[i].style.backgroundRepeat ='no-repeat';
            inputs[i].style.backgroundPosition = '96%';

            let $Alert = document.querySelectorAll('.advert')[i];

            switch(i){
            case 0:
                $Alert.innerHTML = 'First Name cannot be empty'
                break;
            case 1:
                    $Alert.innerHTML = 'Last Name cannot be empty'
                break;
            case 2:

                $Email.placeholder = 'email@example/com'
                $Alert.innerHTML = 'Looks like this is not an email'

                break;
            case 3:
                $Alert.innerHTML = 'Password cannot be empty'
            break;
            }

        }else{
            inputs[i].style.backgroundImage = "";
            inputs[i].style.border = '1px solid hsl(246, 34%, 89%)';
            let $Alert = document.querySelectorAll('.advert')[i];
            $Alert.innerHTML = '';
                      
          
            if(RegEx.test($Email.value) === false){
                let $Email_alert = document.querySelector('.advert.email'); 
                $Email_alert.innerHTML = 'Put a valid e-mail address'
            }

        };

    }


})
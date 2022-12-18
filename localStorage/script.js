'use strict';


// localStorage.setItem('number', 5);
// console.log(localStorage.getItem('number'));

const checkBox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      changeColor = document.querySelector('#color');

if(localStorage.getItem('isChecked')){
    checkBox.checked = true;
}

if(localStorage.getItem('bg') == 'changed'){
    form.style.backgroundColor = 'red';
}

checkBox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

changeColor.addEventListener('click', () =>{
    if(localStorage.getItem('bg') == 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "red";
    }

});

const person = {
    name: 'Alex',
    age: 25
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('alex', serializedPerson);

console.log(localStorage.getItem('alex'));

'use strict';
/*
console.log(document.querySelector(".message").textContent);
 
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 11;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Handling click events
document.querySelector('.check').addEventListener('click', () =>{
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

if (!guess) {
    document.querySelector(".message").textContent = 'No number!';
}
})

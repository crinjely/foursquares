
// alert("welcome to my trash game")
// alert('its four corners')
// alert("if you dont know how to play then you don't have a childhood :)")
// alert('look in console for the coler/ number')
// alert("(right click than inspect then press conole)")

const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');
const square4 = document.getElementById('square4');
const random = document.getElementById('random')

let userPick;
const colors = ['red', 'green', 'yellow', 'blue']

square1.addEventListener('click', userClick)
square2.addEventListener('click', userClick)
square3.addEventListener('click', userClick)
square4.addEventListener('click', userClick)
random.addEventListener('click', randomClicked)

function userClick(ev){
    const color = ev.target.style.backgroundColor;
    userPick = color;
    console.log(color);
    alert('you chose ' + color);    
}


function randomClicked() {
    if(!userPick) {
        alert('pick a color first');
        return;
    }

    const randomNumber = findRandomNumber()
    const computerColor = colors[randomNumber];
    let message = 'Computer picked ' + computerColor + '!'; 
    
    if(computerColor === userPick) {
        message += ' You lose!'
    } else {
        message += ' You survive.... for now!'
    }

    alert(message);
    userPick = null;
}

function findRandomNumber(){
     return Math.floor(Math.random() * 4);
}



const buttons = document.querySelectorAll('button');

const button1 = buttons[0];










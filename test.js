
// alert("welcome to my trash game")
// alert('its four corners')
// alert("if you dont know how to play then you don't have a childhood :)")
// alert('look in console for the coler/ number')
// alert("(right click than inspect then press conole)")

const container = document.querySelector('.container');
const colors = ['red', 'green', 'yellow', 'blue']

function makeSquare(color) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.backgroundColor = color
    square.addEventListener('click', userClick)
    container.appendChild(square);              
}

colors.forEach(makeSquare)
let userPick;
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










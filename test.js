
const userName = prompt("what is your name?")


if(userName === 'justin'){
    alert('oh, your name is justin?? >:)')
} else {
    alert(`your name is now ${userName}`)
}





if(userName.toLowerCase() === 'justin'){
    const justinImage = document.querySelector("#justin");
    justinImage.classList.remove('hidden')
}


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
        alert(`pick a color first, ${userName}`);
        return;
    }

    const randomNumber = findRandomNumber()
    const computerColor = colors[randomNumber];
    let message =  `Computer picked ${computerColor}! `; 
    
    if(computerColor === userPick) {
        message +=  ` You lose ${userName}!`
    } else {
        message +=  ` You survived for now ${userName}!`
    }

    alert(message);
    userPick = null;
}

function findRandomNumber(){
     return Math.floor(Math.random() * 4);
}



const buttons = document.querySelectorAll('button');

const button1 = buttons[0];



while (1 > 2){

}
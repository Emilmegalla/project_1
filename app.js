
var player1 = 'x'
var player2= 'o'

var box1 = document.querySelector('.one');
var box2 = document.querySelector('.two');
var box3 = document.querySelector('.three');
var box4 = document.querySelector('.four');
var box5 = document.querySelector('.five');
var box6 = document.querySelector('.six');
var box7 = document.querySelector('.seven');
var box8 = document.querySelector('.eight');
var box9 = document.querySelector('.nine');

var gameFinished = false

var moveCount = 1;

function  playerMove(event) {
    if (gameFinished != true) {

        if (moveCount % 2 !== 0) {
            event.target.textContent = 'x'
            event.target.style.backgroundColor = "red"
       
        } else {
             
            event.target.textContent = 'o'
            event.target.style.backgroundColor = "blue"
        }                 
        
        moveCount = moveCount + 1         //1,2,3 -o //
    
            if (box1.textContent === 'x' && box2.textContent === 'x' && box3.textContent === 'x' ) { 
                document.querySelector('p').textContent = 'player x is the winner' 
                gameFinished = true               //1,2,3- x //
            
            } else if (box1.textContent === 'o' && box2.textContent === 'o' && box3.textContent === 'o') {
                document.querySelector('p').textContent = 'player O is the winner'  
                gameFinished = true
        
            } else if (box1.textContent === 'x' && box5.textContent === 'x' && box9.textContent === 'x') {
                document.querySelector('p').textContent = 'player x is the winner' 
                gameFinished = true                      //1,5,9 -x //
        
            } else if (box1.textContent === 'o' && box5.textContent === 'o' && box9.textContent === 'o') {
                document.querySelector('p').textContent = 'player O is the winner'  
                gameFinished = true//1,5,9 -o //
        
            } else if (box1.textContent === 'x' && box4.textContent === 'x' && box7.textContent === 'x') {
                document.querySelector('p').textContent = 'player x is the winner' 
                gameFinished = true
        
            } else if (box1.textContent === 'o' && box4.textContent === 'o' && box7.textContent === 'o') {
                document.querySelector('p').textContent = 'player O is the winner'  
                gameFinished = true//1,4,7 -o //
        
            } else if (box2 .textContent === 'x' && box5.textContent === 'x' && box8.textContent === 'x') {
                document.querySelector('p').textContent = 'player x is the winner' 
                gameFinished = true  //2,5,8 -x //
        
            } else if (box2.textContent === 'o' && box5.textContent === 'o' && box8.textContent === 'o') {
                document.querySelector('p').textContent = 'player O is the winner'  
                gameFinished = true //2,5,8 -o //
        
            } else if (box3.textContent === 'x' && box6.textContent === 'x' && box9.textContent === 'x') {
                document.querySelector('p').textContent = 'player x is the winner' 
                gameFinished = true //3,6,9 -x //
        
            } else if (box3.textContent === 'o' && box6.textContent === 'o' && box9.textContent === 'o') {
                document.querySelector('p').textContent = 'player O is the winner'  
                gameFinished = true //3,6,9 -o //
        
            } else if (box4.textContent === 'x' && box5.textContent === 'x' && box6.textContent === 'x') {
                document.querySelector('p').textContent = 'player x is the winner' 
                gameFinished = true //4,5,6 -x //
        
            } else if (box4.textContent === 'o' && box5.textContent === 'o' && box6.textContent === 'o') {
                document.querySelector('p').textContent = 'player O is the winner'  
                gameFinished = true//4,5,6 -o //
        
            } else if (box7.textContent === 'x' && box8.textContent === 'x' && box9.textContent === 'x') {
                document.querySelector('p').textContent = 'player x is the winner' 
                gameFinished = true //7,8,9 -x//
        
            } else if (box7.textContent === 'o' && box8.textContent === 'o' && box9.textContent === 'o') {
                document.querySelector('p').textContent = 'player O is the winner'  
                gameFinished = true //7,8,9 -o//
        
            } else if (box3.textContent === 'x' && box5.textContent === 'x' && box7textContent === 'x') {
                console.log('player x is the winner') //3,5,7 -x//
                gameFinished = true
        
            } else if (box3.textContent === 'o' && box5.textContent === 'o' && box7.textContent === 'o') {
                document.querySelector('p').textContent = 'player O is the winner'  
                gameFinished = true //3,5,7 -o//
            } else if (moveCount >= 10) {
                document.querySelector('p').textContent = 'both player draw'
                gameFinished = true
                
            }
        }
    };


box1.addEventListener('click', playerMove)
box2.addEventListener('click', playerMove)
box3.addEventListener('click', playerMove)
box4.addEventListener('click', playerMove)
box5.addEventListener('click', playerMove)
box6.addEventListener('click', playerMove)
box7.addEventListener('click', playerMove)
box8.addEventListener('click', playerMove)
box9.addEventListener('click', playerMove)


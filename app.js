 console.log('hi');

// document.querySelector('.one').addEventListener('click', function(){
//     document.querySelector('.one').style.backgroundColor = 'red'
// });

// document.querySelector('.two').addEventListener('click', function(){
//     document.querySelector('.two').style.backgroundColor = 'red'
// });

// document.querySelector('.three').addEventListener('click', function(){
//     document.querySelector('.three').style.backgroundColor = 'red'
// });

// document.querySelector('.four').addEventListener('click', function(){
//     document.querySelector('.four').style.backgroundColor = 'red'
// });

// document.querySelector('.five').addEventListener('click', function(){
//     document.querySelector('.five').style.backgroundColor = 'red'
// });

// document.querySelector('.six').addEventListener('click', function(){
//     document.querySelector('.six').style.backgroundColor = 'red'
// });

// document.querySelector('.seven').addEventListener('click', function(){
//     document.querySelector('.seven').style.backgroundColor = 'red'
// });

// document.querySelector('.eight').addEventListener('click', function(){
//     document.querySelector('.eight').style.backgroundColor = 'red'
// });

// document.querySelector('.nine').addEventListener('click', function(){
//     document.querySelector('.nine').style.backgroundColor = 'red'
// });

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

var moveCount = 1;

function  playerMove(event) {
    if (moveCount % 2 !== 0) {
        event.target.textContent = 'x'
        event.target.style.backgroundColor = "red"
   
    } else {
         
        event.target.textContent = 'o'
        event.target.style.backgroundColor = "blue"
    }
    
    moveCount = moveCount + 1

    if (box1.textContent === 'x' && box2.textContent === 'x' && box3.textContent === 'x' ) { 
        console.log ('player x is the winner') //1,2,3- x //

    } else if (box1.textContent === 'o' && box2.textContent === 'o' && box3.textContent === 'o') {
        console.log ('player o is the winner') //1,2,3 -o //

    } else if (box1.textContent === 'x' && box5.textContent === 'x' && box9.textContent === 'x') {
        console.log('player x is the winner') //1,5,9 -x //

    } else if (box1.textContent === 'o' && box5.textContent === 'o' && box9.textContent === 'o') {
        console.log('player o is the winner') //1,5,9 -o //

    } else if (box1.textContent === 'x' && box4.textContent === 'x' && box7.textContent === 'x') {
        console.log('player x is the winner') //1,4,7 -x //

    } else if (box1.textContent === 'o' && box4.textContent === 'o' && box7.textContent === 'o') {
        console.log('player o is the winner') //1,4,7 -o //

    } else if (box2 .textContent === 'x' && box5.textContent === 'x' && box8.textContent === 'x') {
        console.log('player x is the winner') //2,5,8 -x //

    } else if (box2.textContent === 'o' && box5.textContent === 'o' && box8.textContent === 'o') {
        console.log('player o is the winner') //2,5,8 -o //

    } else if (box3.textContent === 'x' && box6.textContent === 'x' && box9.textContent === 'x') {
            console.log('player x is the winner') //3,6,9 -x //

    } else if (box3.textContent === 'o' && box6.textContent === 'o' && box9.textContent === 'o') {
        console.log('player o is the winner') //3,6,9 -o //

    } else if (box4.textContent === 'x' && box5.textContent === 'x' && box6.textContent === 'x') {
        console.log('player x is the winner') //4,5,6 -x //

    } else if (box4.textContent === 'o' && box5.textContent === 'o' && box6.textContent === 'o') {
        console.log('player o is the winner') //4,5,6 -o //

    } else if (box7.textContent === 'x' && box8.textContent === 'x' && box9.textContent === 'x') {
        console.log('player x is the winner') //7,8,9 -x//

    } else if (box7.textContent === 'o' && box8.textContent === 'o' && box9.textContent === 'o') {
        console.log('player o is the winner') //7,8,9 -o//

    } else if (box3.textContent === 'x' && box5.textContent === 'x' && box7textContent === 'x') {
        console.log('player x is the winner') //3,5,7 -x//

    } else if (box3.textContent === 'o' && box5.textContent === 'o' && box7.textContent === 'o') {
        console.log('player o is the winner') //3,5,7 -o//
    } else if (moveCount >= 10) {
        console.log('Player x and player o are draw')
        
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

// if statment 

// var ID = document.getElementById("grad")

// function change (event){
//     event.target.style.backgroundColor = "red";
// }

// function revert (event) {
//     event.target.style.backgroundColor = "green";

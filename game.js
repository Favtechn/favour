// CHALLENGE 1: YOUR AGE IN DAY 
function ageInDays(){
var birthYear = prompt("What year were you born ... Good friend");
var ageInDayss = (2024 -  birthYear);
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1)
}
function reset(){
    document.getElementById('ageInDays').remove()
}
function resett(){
    document.getElementById('rock').remove()
}
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://api.thecatapi.com/v1/images/search?format=src&size=small"
    div.appendChild(image);
}
// Challenge 3 
function rpsGame(yourChoice) {
    console.log(yourChoice);
    // console.log(yourChoice.src);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice  =numberToChoice(randToRpsInt());
    console.log('Computer choice:' , botChoice);
    // alert(botChoice);
    results = decideWinner(humanChoice, botChoice); // 
    console.log(results);

    message = finalMessage(results);
    console.log(message);
    // message = finalMessage(results) // {message'You won!, colour':'green'
    rpsFrontEnd(yourChoice.id, botChoice, message)

}
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock' : {'scissors' :1,'rock':0.5,'paper':0},
        'paper' : {'rock':1, 'paper':0.5 ,'scissors': 0,},
        'scissors' : {'paper':1 ,'scissors': 0.5,'rock':0},
    };

    var yourScore = rpsDatabase[yourChoice] [computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore]
}

function finalMessage(yourScore, computerScore) {
    if(yourScore === 0 ) {
     return {'message':'You lost!','color':'red' };
    } else if(yourScore === 0.5) {
        return {'message':'You tied','color': 'yellow'}; 
    } else {
        return {'message': 'You won!' , 'color':'green'};
    }
    
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabases = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    // Let remove all images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv =document.createElement('div');
    var botDiv =document.createElement('div');
    var messageDiv =document.createElement('div'); 

    humanDiv.innerHTML = "<img src='" + imagesDatabases[humanImageChoice] + "'height=150 width = 150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' >"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabases[botImageChoice] + "'height=150 width = 150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);' >"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Challenge 4:change the Colour of all buttons 
var all_buttons = document.getElementsByTagName('button');
// console.log(all_buttons)

var copyAllButtons = [];
for(let i=0; i < all_buttons.length; i++ ) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
// console.log(copyAllButtons)
function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red') {
        buttonsRed();
    }else if (buttonThingy.value === 'green'){
        buttonsGreen();
    }else if (buttonThingy.value === 'blue'){
        buttonsBlue();
    }else if (buttonThingy.value === 'reset'){
        buttonColorReset();
    }else if (buttonThingy.value === 'random'){
        randomColours();
    }
}

function buttonsRed(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsBlue(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}
function buttonsGreen(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function  buttonColorReset(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function  randomColours() {
    let choices = [ 'btn-primary', 'btn-danger', 'btn-success' , 'btn-warning']
   
    // for(let i=0; i < all_buttons.length; i++){
    //     let randomNumber = Math.floor(Math.random() * 4);
    //     all_buttons[i].classlist.remove(all_buttons[i].classList[1]);
    //     all_buttons[i].classList.add(choices[randomNumber])

    // } 
    for (let i=0; i < all_buttons.length; i++) {
             let randomNumbers = Math.floor(Math.random() * 4);
             all_buttons[i].classList.remove(all_buttons[i].classList[1]);
             all_buttons[i].classList.add(choices[randomNumbers])
            
    }
}
// console.log(buttonThingy.value);
// let choices = ['btn-primary', 'btn-danger', 'btn-success' , 'btn-warning']

//    for (let i=0; i < all_buttons.length; i++) {
//     let randomNumbers = Math.floor(Math.random() * 4);
//     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
//     all_buttons[i].classList.add(choices[randomNumbers])
    
//    }



























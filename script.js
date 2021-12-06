// Navigation
let magicBall = document.querySelector(".magicBall"),
    numGame = document.querySelector(".numberGame"),
    cardsGame = document.querySelector(".cardGame");
    slotGame = document.querySelector(".slotGame");
function MagicBall(){
    document.getElementById('MagicBall').classList.add('active');
    document.getElementById('NumberGame').classList.remove('active');
    document.getElementById('CardGame').classList.remove('active');
    document.getElementById('SlotMachine').classList.remove('active');

    cardsGame.style.display = 'none';
    numGame.style.display = 'none';
    slotGame.style.display = 'none';
    magicBall.style.display = 'flex';
}
function NumberGame(){
    document.getElementById('NumberGame').classList.add('active');
    document.getElementById('MagicBall').classList.remove('active');
    document.getElementById('CardGame').classList.remove('active');
    document.getElementById('SlotMachine').classList.remove('active');

    magicBall.style.display = 'none';
    cardsGame.style.display = 'none';
    slotGame.style.display = 'none';
    numGame.style.display = 'flex';
}

function CardGame(){
    document.getElementById('CardGame').classList.add('active');
    document.getElementById('MagicBall').classList.remove('active');
    document.getElementById('NumberGame').classList.remove('active');
    document.getElementById('SlotMachine').classList.remove('active');
    magicBall.style.display = 'none';
    numGame.style.display = 'none';
    slotGame.style.display = 'none';
    cardsGame.style.display = 'flex';
}

function SlotMachine(){
    document.getElementById('SlotMachine').classList.add('active');
    document.getElementById('MagicBall').classList.remove('active');
    document.getElementById('NumberGame').classList.remove('active');
    document.getElementById('CardGame').classList.remove('active');
    magicBall.style.display = 'none';
    numGame.style.display = 'none';
    slotGame.style.display = 'flex';
    cardsGame.style.display = 'none';
}
//General'

var nameUser = prompt('Please enter your name:', '')
if (nameUser == "")
{
    nameUser = "User"
     alert("You don't enter your nickname")
}
else{
    document.querySelector('.user').innerHTML = nameUser
    }
    

//   var nameUser = prompt('Enter your nickname', '');
//   if(nameUser == ""){
//     nameUser = "#noname"
//   }
// Magic Ball 
const answers = ["No doubt", "Ask later", "I think not", "Probably not", "Yes", "Very likely", "No", "Chances are good", "Exactly yes", "Not now", "Unclear "," I think not "," There are doubts "," Unclear "," Unclear "," Soon "];
function Drop(){
    document.getElementById("ask").value = ""
    document.getElementById("prediction").innerHTML = "Ask the ball a question you are interested in";
}
document.getElementById('ball').onclick =function(){
	document.getElementById("ask").placeholder = "Type here your question";
   if ( document.getElementById("ask").value == "" || document.getElementById("ask").value.indexOf("?") == -1 ){
	   alert ( "Please fill input with a question to the magic ball with '?'" );
	   document.getElementById("ask").style.border = "4px solid red";
	   document.getElementById("ask").placeholder = "Fill in this field";
	   document.querySelector(".bar").style.width = "528px";
	   }
	   else{   
	   document.getElementById("ask").style.border = "none";
	   document.getElementById("ask").placeholder = "Type here your question"; 
	   let anim = document.getElementById('ball');
	   anim.classList.add('shakeAnim');
	   setTimeout(function(){anim.classList.remove('shakeAnim');}, 1000);
let random = Math.floor(Math.random() * answers.length);

document.getElementById("prediction").innerHTML = answers[random];
document.getElementById("prediction").style.animation = "text 2s ease";
setTimeout(Drop, 3000);
}
}
// Number game
//==MODAL=//
var openModal = document.getElementById('openModal');
openModal.style.display = 'none'
function OpenClose(){
 
  if(openModal.style.display === 'none'){
    openModal.style.display = 'block';
  }
    else{
      openModal.style.display = 'none';
    }
  }

  const replace = document.getElementById('user')
  const   select = document.getElementById('firstMan');
  select.onclick = function(){
    replace.innerHTML = " <img src='img/1.png'>";
  }
  const select1 = document.querySelector(".second-man");
  select1.onclick = function(){
  replace.innerHTML = " <img src='img/2.png'>"
  }
  const select2 = document.querySelector(".third-man");
  select2.onclick = function(){
  replace.innerHTML = " <img src='img/3.png'>"
  }
  const select3 = document.querySelector(".forth-man");
  select3.onclick = function(){
  replace.innerHTML = " <img src='img/4.png'>"
  }
  const select4 = document.querySelector(".first-wooman");
  select4.onclick = function(){
  replace.innerHTML = " <img src='img/(1).png'>"
  }
  const select5 = document.querySelector(".second-wooman");
  select5.onclick = function(){
  replace.innerHTML = " <img src='img/(2).png'>"
  }
  const select6 = document.querySelector(".third-wooman");
  select6.onclick = function(){
  replace.innerHTML = " <img src='img/(3).png'>"
  }
  const select7 = document.querySelector(".forth-wooman");
  select7.onclick = function(){
  replace.innerHTML = " <img src='img/(4).png'>";
  }
//=GAME=//

document.getElementById('name-player').innerHTML = "Your nickname: " + nameUser;

var counterPlayer = 0;
var counterBot = 0;

var guessSubmit = document.getElementById('avatarpl');

function setGameOver() {
  guessSubmit.disabled = true;
}

function resetGame(){
 guessSubmit.disabled = false;
 document.getElementById('score1').innerHTML = "Your score: 0";
 document.getElementById('score2').innerHTML = "Bot score: 0";
 counterPlayer = 0;
 counterBot = 0;
 document.getElementById('card-player').innerHTML = "Current number of points: ";
 document.getElementById('card-bot').innerHTML = "Current number of points: ";
}

function rand(){
    var player1 = document.getElementById("card-player").innerHTML = "Current number of points:" +Math.floor(Math.random() * 10);
  var player2 = document.getElementById("card-bot").innerHTML = "Current number of points:" + Math.floor(Math.random() * 10);

  if(player1 > player2){
    counterPlayer++;
    document.getElementById("score1").innerHTML = "Your score:" + counterPlayer;
    }
  if(player1 < player2){
    counterBot++;
    document.getElementById("score2").innerHTML ="Bot score: " + counterBot;
  }
  if(counterPlayer == 3){
      alert("player won");
      setGameOver();
  }
  if(counterBot == 3){
    alert('bot won!');
    setGameOver();
  }
}

// Сard game
var Play = document.getElementById('play')
var user = document.getElementById("scoreUser")
var comp = document.getElementById("scoreComputer")
var cardBack = "img/back.png"
var cards = ["img/J_cross.png", "img/J_diamond.png", "img/J_hearts.png", "img/6_peak.png", "img/7_diamond.png", "img/7_peak.png", "img/8_cross.png","img/8_diamond.png","img/8_hearts.png","img/9_diamond.png","img/9_peak.png","img/10_cross.png","img/10_peak.png","img/A_cross.png","img/A_diamond.png","img/A_hearts.png","img/A_hearts.png","img/J_peak.png","img/K_cross.png","img/K_diamond.png","img/K_hearts.png","img/K_peak.png","img/Q_cross.png","img/Q_diamond.png","img/Q_hearts.png","img/Q_peak.png"];
var  leftCard = document.getElementById('scoreUser'), 
rightCard = document.getElementById('scoreComputer'), localcards, leftCardValue, rightCardValue, 
taked = false, isFinished = false, cardRoundCount = 1, playerTotalValue = 0, oppTotalValue = 0;

var win = document.getElementById('win')

Play.addEventListener('click', ()=>{
    if (!taked){
        TakeCard();
    }
    else if (taked && !isFinished){
        CardReset();
    }
    else{
        CardReset();
    }
})

function TakeCard(){
    taked = true;
    localcards = cards;
    let temp = Math.floor(Math.random() * (localcards.length - 0)) + 0;
    leftCard = localcards.at(temp);
    localcards.splice(temp, 1);
    temp = Math.floor(Math.random() * (localcards.length - 0)) + 0;
    rightCard = localcards.at(temp);
    document.querySelector('.scoreUser').setAttribute('src',`${leftCard}`);
    document.querySelector('.scoreComputer').setAttribute('src',`${ rightCard}`);
    user.classList.add('Anim');
    setTimeout(function(){user.classList.remove('Anim');}, 1000);
    comp.classList.add('Anim');
    setTimeout(function(){comp.classList.remove('Anim');}, 1000);
    leftCardValue = CardValue(leftCard); //PValue
    rightCardValue = CardValue(rightCard); //OppValue
    document.querySelector('.attempt').innerHTML = cardRoundCount;
        playerTotalValue += leftCardValue;
        oppTotalValue += rightCardValue;
        cardRoundCount++;
        document.querySelector(".sumScoreUser").innerHTML = playerTotalValue;
        document.querySelector(".sumScoreComputer").innerHTML = oppTotalValue;
taked = false;

        if (cardRoundCount > 3){
            Win();
            cardRoundCount = 1;
            Play.innerHTML = "New game";
            playerTotalValue = 0;
            oppTotalValue = 0;
            
            if(isFinished == true){
                CardReset();
            }
        }
        else {
            Play.innerHTML = "Next card";
        }
}


function Win(){
    if (cardRoundCount == 4)
    {
		$(document).ready(function($) {
			$('.popup-open').ready(function() {
				$('.popup-fade').fadeIn();
				return false;
			});
			$('.popup-close').click(function() {
				$(this).parents('.popup-fade').fadeOut();
                user.setAttribute('src',`${cardBack}`);
                comp.setAttribute('src',`${ cardBack}`);
                user.classList.add('Anim');
                setTimeout(function(){user.classList.remove('Anim');}, 1000);
                comp.classList.add('Anim');
                setTimeout(function(){comp.classList.remove('Anim');}, 1000);
                document.querySelector(".sumScoreUser").innerHTML = 0;
                document.querySelector(".sumScoreComputer").innerHTML = 0;
                document.querySelector('.attempt').innerHTML = 0;
                return false;
			});

			$(document).keydown(function(e) {
				if (e.keyCode === 27) {
					e.stopPropagation();
					$('.popup-fade').fadeOut();
				}
			});

			$('.popup-fade').click(function(e) {
				if ($(e.target).closest('.popup').length == 0) {
					$(this).fadeOut();
                    user.setAttribute('src',`${cardBack}`);
                    comp.setAttribute('src',`${ cardBack}`);
                    user.classList.add('Anim');
                    setTimeout(function(){user.classList.remove('Anim');}, 1000);
                    comp.classList.add('Anim');
                    setTimeout(function(){comp.classList.remove('Anim');}, 1000);
                    document.querySelector(".sumScoreUser").innerHTML = 0;
                    document.querySelector(".sumScoreComputer").innerHTML = 0;
                    document.querySelector('.attempt').innerHTML = 0;
				}
			});
		});

        if (playerTotalValue > oppTotalValue){
        win.innerHTML= nameUser + " win";
    }
        if (oppTotalValue > playerTotalValue){
            win.innerHTML= "computer win";
    }
        if (oppTotalValue == playerTotalValue){
        win.innerHTML= "draw";
    }
}
}


function CardReset(){

            isFinished = false;
        
        taked = false;
}

function CardValue(card){
    let symb;
    for (let i = card.length; i >= 0; i--){
		
         if (card.at(i)=='/'){
            symb = card.at(i+1);
           
        }
    }
    switch(symb){
        case '6' : return 6;
        case '7' : return 7;
        case '8' : return 8;
        case '9' : return 9;
        case '1' : return 10;
        case 'J' : return 3;
        case 'Q' : return 4;
        case 'K' : return 5;
        case 'A' : return 11;
        default: return -1;
    }
}
// Slot mashine
var doing = false;

function doSlot()
{
	if (doing){return null;}
	doing = true;
	var numChanges = randomInt(1,4)*7
	var numeberSlot1 = numChanges+randomInt(1,7)
	var numeberSlot2 = numChanges+3*7+randomInt(1,7)
	var numeberSlot3 = numChanges+5*7+randomInt(1,7)

	var i1 = 0;
	var i2 = 0;
	var i3 = 0;
    document.getElementById('status').innerHTML = "SPINNING"
	slot1 = setInterval(spin1, 50);
	slot2 = setInterval(spin2, 50);
	slot3 = setInterval(spin3, 50);
	function spin1(){
		i1++;
		if (i1>=numeberSlot1){
			
			clearInterval(slot1);
			return null;
            
		}
		slotTile = document.getElementById("slot1");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin2(){
		i2++;
		if (i2>=numeberSlot2){
			
			clearInterval(slot2);
			return null;
           
		}
		slotTile = document.getElementById("slot2");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin3(){
		i3++;
		if (i3>=numeberSlot3){
			clearInterval(slot3);
			testWin();
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
}
let score = 10;
var winTimes = 0;
var gameBtn = document.getElementById('game');
function gameOver() {
	gameBtn.disabled = true;
	gameBtn.style.cursor = "not-allowed";
	gameBtn.style.cursor = "none";
}

function testWin(){
	var slot1 = document.getElementById("slot1").className
	var slot2 = document.getElementById("slot2").className
	var slot3 = document.getElementById("slot3").className
    
	if (((slot1 == slot2 && slot2 == slot3) ||
		(slot1 == slot2 && slot3 == "a7") ||
		(slot1 == slot3 && slot2 == "a7") ||
		(slot2 == slot3 && slot1 == "a7") ||
		(slot1 == slot2 && slot1 == "a7") ||
		(slot1 == slot3 && slot1 == "a7") ||
		(slot2 == slot3 && slot2 == "a7") ) && !(slot1 == slot2 && slot2 == slot3 && slot1=="a7")){
        document.getElementById('status').innerHTML = "YOU WIN!";
        document.getElementById('score').innerHTML = "Spins left: "+ (score = score + 10) +"</br>You won: "+ (winTimes = winTimes + 1) +" times";
	}
	else{
        document.getElementById('status').innerHTML = "YOU LOSE!";
        score--;
        document.getElementById('score').innerHTML = "Spins left: "+ (score) +"</br>You won: "+ winTimes +" times";
		if (score == 0){
			if (score == 0)
			{
				alert("Game Over!\nYou loose");
			}
			gameOver();		
		}
	}
	doing = false;
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}
const compDisplay = document.querySelector('.computer_result');
const playerSword = document.querySelector('.sword');
const playerSpear = document.querySelector('.spear');
const playerShield = document.querySelector('.shield');
const hasil = document.querySelector('.display-result');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const draw = document.querySelector('.draw');
const playerHistory = document.querySelector('.plyrhistory');
const compHistory = document.querySelector('.comhistory');


var Compresult;
var playerchoice;
var menang = 0;
var kalah = 0;
var seri = 0;

playerSword.addEventListener('click', function() {
    playerchoice = 'sword';
    computerChoice = Math.round(Math.random() * 10);
    execute(computerChoice);
});
playerSpear.addEventListener('click', function() {
    playerchoice = 'spear';
    computerChoice = Math.round(Math.random() * 10);
    execute(computerChoice);
});
playerShield.addEventListener('click', function() {
    playerchoice = 'shield';
    computerChoice = Math.round(Math.random() * 10);
    execute(computerChoice);
});

function execute(computerChoice) {

    if (computerChoice >= 0 && computerChoice <= 3) {
        compDisplay.style.background = "url(asset/sword.png)";
        Compresult = 'sword';
    } else if (computerChoice >= 4 && computerChoice <= 6) {
        compDisplay.style.background = "url(asset/shield.png)";
        Compresult = 'shield';
    } else if (computerChoice >= 7 && computerChoice <= 9) {
        compDisplay.style.background = "url(asset/spear.png)";
        Compresult = 'spear';
    }
    compHistory.innerHTML = "comp :" + Compresult;
    playerHistory.innerHTML = "player :" + playerchoice;
    compDisplay.style.backgroundSize = "cover";
    var gameStatus;
    if (playerchoice == 'sword') {
        if (Compresult == 'shield') {
            gameStatus = 'win';
        } else if (Compresult == 'spear') {
            gameStatus = 'lose';
        }
    }

    if (playerchoice == 'shield') {
        if (Compresult == 'spear') {
            gameStatus = 'win';
        } else if (Compresult == 'sword') {
            gameStatus = 'lose';
        }
    }

    if (playerchoice == 'spear') {
        if (Compresult == 'sword') {
            gameStatus = 'win';
        } else if (Compresult == 'shield') {
            gameStatus = 'lose';
        }
    }

    if (playerchoice == Compresult) {
        gameStatus = 'draw';
    }

    if (gameStatus == 'win') {
        hasil.innerHTML = "Menang";
        menang += 1;
        win.innerHTML = menang;
        playerHistory.style.color = " rgb(8, 238, 123)";
        compHistory.style.color = " rgb(238, 49, 90)";
    }
    if (gameStatus == 'lose') {
        hasil.innerHTML = "Kalah";
        kalah += 1;
        lose.innerHTML = kalah;
        compHistory.style.color = "rgb(8, 238, 123)";
        playerHistory.style.color = " rgb(238, 49, 90)";
    }
    if (gameStatus == 'draw') {
        hasil.innerHTML = "Seri";
        seri += 1;
        draw.innerHTML = seri;
        compHistory.style.color = "yellow";
        playerHistory.style.color = "yellow";
    }
}
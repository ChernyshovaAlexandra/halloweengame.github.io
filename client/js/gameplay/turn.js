const answerModal = document.getElementsByClassName('example')[0];
const taskModal = document.getElementsByClassName('task-modal')[0];
const magicBook = document.getElementsByClassName('magicBook')[0];
let unitHit = require('./unitHit.js');
let unitDefeated = require('./unitDefeated.js');
let gameData = require('./gameData.js');
let monster = require('./monsterConfig.js');
let player = require('./playerConfig.js');

let unit, unitBlock;

const turn = function (action) {
    let level = gameData().level;
    answerModal.innerHTML = '';
    answerModal.classList.remove('answer');
    taskModal.getElementsByTagName('h3')[0].innerText = '';
    taskModal.classList.remove('active');
    magicBook.classList.remove('hidden');

    if(action === 'correct'){
        unit = monster;
    }

    if(action === 'error'){
        unit = player;
    }
    unitBlock = document.getElementsByClassName(unit.name)[0];
    unitBlock.innerHTML += '<div class="fireball-animation"></div>';
    unit.health -= level * 10;
    document.getElementsByClassName('audio')[level].play();

    setTimeout(function () {
        if(unit.health <= 0){
            unitDefeated(unit);
        } else {
            unitHit(unit);
        }
    }, 1000);
};

module.exports = turn;

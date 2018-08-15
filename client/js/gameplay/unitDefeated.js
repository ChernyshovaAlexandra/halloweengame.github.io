let createUnit = require('./createUnit.js');
let restartGame = require('./restartGame.js');
let monster = require('./monsterConfig.js');
const taskModal = document.getElementsByClassName('task-modal')[0];
const unitDefeated = function (unit) {
    if(unit.name === 'monster'){
        createUnit(monster);
    } else if(unit.name === 'player'){
        taskModal.classList.add('active');
        taskModal.innerHTML = '<h2>Oh, no! Game over!<br> Try again?</h2><button class="close-answer" value="error">No</button><button class="close-answer" value="replay">Ok</button>';
        let replay = document.getElementsByClassName('close-answer');
        Array.prototype.filter.call(replay, function (item) {
            item.addEventListener('click', function () {
                if(item.value == 'error'){
                    alert('see you later!');
                } else if(item.value == 'replay'){
                    taskModal.classList.remove('active');
                   restartGame();
                }
            });
        });
    }
};

module.exports = unitDefeated;
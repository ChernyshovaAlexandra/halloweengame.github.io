let answer = require('./createTask.js');
let gameData = require('./gameData.js');

const checkAnswer = function (userAnswer) {
    let data = gameData();
    if(userAnswer == data.answer){
        return '<p>Correct, the monster will soon be defeated</p><button class="close-answer" value="correct">Ok</button>'
    } else {
        return '<p>Not correct, be attentive</p><button class="close-answer" value="error">Ok</button>'
    }
};

module.exports = checkAnswer;
const getRandomInt = require('../getRandomInt.js');
const comparation = function (level) {
    let numberOne;
    let numberTwo;
    let numberThree;
    if(level== 1){
        numberOne = getRandomInt(1,9);
        numberTwo = getRandomInt(1,9);
    } else if(level ==2){
        numberOne = getRandomInt(10,90);
        numberTwo = getRandomInt(10,90);
    } else if (level == 3){
        numberOne = getRandomInt(10, 900);
        numberTwo = getRandomInt(10, 900);
    }
    return {
        title: 'Insert ">", "<" or "=" to make the expression correct:',
        body: '<p>' + numberOne + '</p>' + '<input type="text" name="result" class="result" autofocus="">'  + '<p>' + numberTwo + '</p>' + (numberThree ? '<input type="text" name="result" class="result" autofocus=""><p>'  + numberThree + '</p>' : '') + '<input type="submit" value="answer" class="answerButton">',
        answer: numberOne > numberTwo ? '>' : numberOne < numberTwo ? '<' : '='
    }
};

module.exports = comparation;
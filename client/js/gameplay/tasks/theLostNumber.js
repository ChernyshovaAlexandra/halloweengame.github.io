let numberOne, numberTwo, result, operator;
const operators = ['+', '-'];
const getRandomInt = require('../getRandomInt.js');
const theLostNumber = function (level) {
    if(level == 1){
        numberOne = getRandomInt(1, 10);
        numberTwo =getRandomInt(1,10);
        operator= operators[getRandomInt(0,1)];
        result = eval((numberOne + operator + numberTwo).toString());
    }
    else if(level == 2){
        numberOne = getRandomInt(10, 100);
        numberTwo =getRandomInt(0,10);
        operator= operators[getRandomInt(0,1)];
        result = eval((numberOne + operator + numberTwo).toString());
    }
    else if(level ==3){
        numberOne = getRandomInt(100, 500);
        numberTwo =getRandomInt(0,100);
        operator= operators[getRandomInt(0,1)];
        result = eval((numberOne + operator + numberTwo).toString());
    }
    return{
        title: 'Insert the right number to make the expression correct:',
        body: '<input type="text" name="result" class="result" autofocus="">'+'<p>' + operator + '<p>'+ numberTwo + '</p><p>=</p><p>'+ result +'</p><input type="submit" value="answer" class="answerButton">',
        answer: numberOne
    }
};

module.exports = theLostNumber;
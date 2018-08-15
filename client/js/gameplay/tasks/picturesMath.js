const getRandomInt = require('../getRandomInt.js');
const exPics = ['<div class="ex-pic pumpkin"></div>', '<div class="ex-pic bat"></div>'];
const operators = ['+', '-'];
let operator, numberOne, numberTwo, answer;
const picturesMath = function (level) {
    if(level==1){
        numberOne = getRandomInt(2,5);
        numberTwo = getRandomInt(6,12);
        operator = operators[getRandomInt(0,1)];
        answer = eval((numberOne + operator + numberTwo).toString());
    }
    else if(level==2){
        numberOne = getRandomInt(10,30);
        numberTwo = getRandomInt(60,100);
        operator = operators[getRandomInt(0,1)];
        answer = eval((numberOne + operator + numberTwo).toString());
    }
    else if(level ==3){
        numberOne = getRandomInt(20,500);
        numberTwo = getRandomInt(68,300);
        operator = operators[getRandomInt(0,1)];
        answer = eval((numberOne + operator + numberTwo).toString());
    }
    return{
        title: 'Solve the example using pictures:',
        body: '<div class=="example-pictures"><div class="pics">' + exPics[0] + '<p>' + numberOne + '</p><p>' + exPics[1] +'<p>' + numberTwo  + '</p></div><div class="pics">'  +
        exPics[0] + '<p>'+ operator+'</p>' + exPics[1]+ '<p>=</p>' + '<input type="text" name="result" class="result" autofocus=""><input type="submit" value="answer" class="answerButton"></div></div>',
        answer: answer
    }
};

module.exports = picturesMath;
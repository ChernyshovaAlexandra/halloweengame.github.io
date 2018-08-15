let difference, numberOne, numberTwo, numberThree;
const getRandomInt = require('../getRandomInt.js');
const sequence = function (level) {
    if(level == 1){
        difference= getRandomInt(2,10);
        numberOne = getRandomInt(0,9);
        numberTwo = numberOne + difference;
        numberThree = numberTwo + difference;
    }
    else if(level==2){
        difference= getRandomInt(5,17);
        numberOne = getRandomInt(5,27);
        numberTwo = numberOne + difference;
        numberThree = numberTwo+difference;
    }
    else if(level==3){
        difference= getRandomInt(28,110);
        numberOne = getRandomInt(1,79);
        numberTwo = numberOne + difference;
        numberThree = numberTwo +  difference;
    }
    return {
        title: 'Continue the sequence',
        body: '<p>' + numberOne + '</p><p>' + numberTwo +'</p><p>' + numberThree + '</p>' + '<input type="text" name="result" class="result" autofocus="">' + '<input type="submit" value="answer" class="answerButton">',
        answer: numberThree + difference,
    }
};
module.exports = sequence;
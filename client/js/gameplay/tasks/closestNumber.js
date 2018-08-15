const getRandomInt = require('../getRandomInt.js');
let numberTwo, numberThree, numberOne;
const closestNumber = function(level){
    if(level==1){
        numberOne = getRandomInt(1,10);
        numberTwo =numberOne+1;
        numberThree = numberTwo +1;
    }
    else if(level==2){
        numberOne = getRandomInt(10,100);
        numberTwo =numberOne+1;
        numberThree = numberTwo +1;
    }
    else if(level==3){
        numberOne = getRandomInt(100,1000);
        numberTwo =numberOne+1;
        numberThree = numberTwo +1;
    }
    return {
        title: 'Write the lost number:',
        body: '<p>' + numberOne + '</p><p>' + numberTwo +'</p>'+ '<input type="text" name="result" class="result" autofocus="">' + '<input type="submit" value="answer" class="answerButton">',
        answer: numberThree,
    }
};

module.exports = closestNumber;
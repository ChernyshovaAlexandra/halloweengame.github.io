const getRandomInt = require('../getRandomInt.js');

const arithmetics = function(level){
    let operators = [['-', '+'],['*', ':']];
    let curOperator;
    let numberOne;
    let numberTwo;
    let numberThree;
    if(level == 1){
        curOperator = operators[0][getRandomInt(0, operators[0].length - 1)];
        numberOne = getRandomInt(1, 10);
        numberTwo = getRandomInt(0, curOperator === '-' ? numberOne : Math.pow(10, level));
    } else if(level == 2){
        curOperator = operators[1][getRandomInt(0, operators[1].length - 1)];
        numberTwo = getRandomInt(1, 10);
        numberOne = curOperator === ':' ? getRandomInt(1, 10) * numberTwo : getRandomInt(1, 10);
    } else if(level == 3){
        curOperator = [
            operators[1][getRandomInt(0, operators[1].length - 1 )],
            operators[0][getRandomInt(0, operators[0].length - 1 )]
        ];
        numberTwo = getRandomInt(1, 10);
        numberOne = curOperator[0] === ':' ? getRandomInt(1, 10) * numberTwo : getRandomInt(1, 10);
        numberThree = getRandomInt(1, eval(numberOne + (curOperator[0] === ':' ? '/' : '*') + numberTwo));
    }

    return {
        title: 'Try to solve the example:',
        body: '<p>' + numberOne + '</p><p>' + curOperator[0]  + '</p><p>' + numberTwo + '</p>' + (numberThree ? '<p>' + curOperator[1] + '</p><p>' + numberThree + '</p>' : '') + '<p>=</p><input type="text" name="result" class="result" autofocus=""><input type="submit" value="answer" class="answerButton">',
        answer: eval(numberOne + (curOperator[0] === ':' ? '/' : curOperator[0]) + numberTwo + (numberThree ? curOperator[1] + '' + numberThree : ''))
    }
};

module.exports = arithmetics;
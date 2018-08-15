const arithmetics= require('./tasks/arithmetics.js');
const comparation = require('./tasks/comparation.js');
const makeUpWords = require('./tasks/makeUpWords.js');
const sequence = require('./tasks/sequence.js');
const closestNumber = require('./tasks/closestNumber.js');
const theLostNumber = require('./tasks/theLostNumber.js');
const picturesMath = require('./tasks/picturesMath.js');

const setLevel = function(){
    return{
        arithmeticTask: arithmetics,
        comparationTask: comparation,
        makeUpWordsTask: makeUpWords,
        sequenceTask: sequence,
        closestNumberTask: closestNumber,
        theLostNumberTask: theLostNumber,
        picturesMathTask: picturesMath
    }
};

module.exports = setLevel;
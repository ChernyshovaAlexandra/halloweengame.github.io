const words =[[['h','o','r','r','o','r'], 'horror'], [['m','a','g','i','c'], 'magic'],[['b','l','o','o','d'],'blood'], [['t','r','i','c','k'],'trick'],[['p','o', 'w','e','r'], 'power'], [['h','a','l','l','o','w','e','e','n'],'halloween']];
const getRandomInt = require('../getRandomInt.js');
let wordToShuffle, shuffled, shuffledWord;
const makeUpWords = function (level) {
    if(level==1) {
        wordToShuffle = words[getRandomInt(0, 1)];
        Array.prototype.shuffle = function () {
            return this.sort(function () {
                return 0.5 - Math.random();
            });
        };
        shuffled = wordToShuffle[0].shuffle();
        shuffledWord = shuffled.concat();
    }else if(level==2){
        wordToShuffle = words[getRandomInt(2, 3)];
        Array.prototype.shuffle = function () {
            return this.sort(function () {
                return 0.5 - Math.random();
            });
        };
        shuffled = wordToShuffle[0].shuffle();
        shuffledWord = shuffled.concat();
    }else if(level==3){
        wordToShuffle = words[getRandomInt(4, 5)];
        Array.prototype.shuffle = function () {
            return this.sort(function () {
                return 0.5 - Math.random();
            });
        };
        shuffled = wordToShuffle[0].shuffle();
        shuffledWord = shuffled.concat();
    }
    return {
        title: 'Make up a word from letters:',
        body: '<p>' + shuffledWord + '</p>' + '<input type="text" name="result" class="result" autofocus="">' + '<input type="submit" value="answer" class="answerButton">',
        answer: wordToShuffle[1]
    }
};

module.exports = makeUpWords;
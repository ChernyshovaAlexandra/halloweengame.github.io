assets
index-gameplay.html
index.html
node_modules
registration.html function Fighter() {
    this.taskModal = document.getElementsByClassName('task-modal')[0];
    this.answer = document.getElementsByClassName('answerButton')[0];
    this.magicBook = document.getElementsByClassName('magicBook')[0];
    this.magicBookOpened = document.getElementsByClassName('magicBookOpened')[0];
    this.body = document.getElementsByTagName('body')[0];
    this.player = document.getElementsByClassName('player-icon')[0];
    this.monsterName = ['Tom', 'Bob', 'Stan', 'Maru', 'Patrick', 'John', 'Jack', 'Iohan', 'Jim', 'David'];
    this.monsterClass = ['ogr', 'troll', 'gremlin', 'gnome', 'orc', 'basilisk', 'elf', 'witcher', 'necromancer', 'cannibal'];
    this.monsterCharacter = ['Agly', 'Rude', 'Crazy', 'Big', 'Bloody', 'Cruel', 'Brutal', 'Wicked', 'Evil', 'Demoniac'];
    this.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.init();
}

Fighter.prototype.init = function(){
    // if(localStorage.getItem('matchMatch')){
    //     this.gameData = JSON.parse(localStorage.getItem('matchMatch'));
    //     this.login();
    // } else {
    //     localStorage.setItem('matchMatch', JSON.stringify(this.gameData));
    //     this.regField.classList.remove('done');
    // }

    this.action();
    setTimeout(function () {
        //document.getElementsByClassName('audio')[0].play();
    });
    this.health = {
        player: 100,
        monster: 100
    };

    this.greetMonster();
};

Fighter.prototype.action = function () {
    let _this = this;

    this.magicBook.addEventListener('click', function () {
        _this.magicBookOpened.classList.toggle('active');
    });

    this.magicBookOpened.getElementsByClassName('closeBook')[0].addEventListener('click', function(){
        _this.magicBookOpened.classList.remove('active');
    });

    document.addEventListener('mousemove', function(e){
        let parallax = document.getElementsByClassName('parallax');
        parallax[0].style.transform = 'translate('+ -(e.clientX / 10).toFixed() +'px, '+ - (e.clientY / 10).toFixed() +'px)';
        parallax[1].style.transform = 'translate('+ (e.clientX / 10).toFixed() +'px, '+ (e.clientY / 10).toFixed() +'px)';
    });

    document.addEventListener('click', function (e) {
        let target = e.target;

        if(target === document.getElementsByClassName('answerButton')[0]){
            let answerModal = document.getElementsByClassName('example')[0];
            answerModal.classList.add('answer');
            answerModal.innerHTML = _this.checkAnswer(document.getElementsByClassName('result')[0].value);
        }

        if(target === document.getElementsByClassName('close-answer')[0]){
            _this.turn(target.value);
        }
    });

    Array.prototype.filter.call(this.magicBookOpened.getElementsByClassName('level'), function (elem) {
        elem.addEventListener('click', function(){
            _this.createTask(this.dataset.level);
        })
    });

};




Fighter.prototype.greetMonster = function () {
    this.monsterHP = document.getElementsByClassName('monster_hp')[0];
    this.monster = document.getElementsByClassName('monsterName')[0];
    this.monsterHP.innerHTML = this.health.monster;
    this.monsterHP.style.width = this.health.monster + '%';
    this.monsterHP.style.backgroundColor = 'green';
    this.monsterHP.style.opacity = '1';
    this.monster.innerHTML =  this.monsterCharacter[this.getRandomInt(0, 9)] + ' ' + this.monsterClass[this.getRandomInt(0, 9)] + ' ' + this.monsterName[this.getRandomInt(0, 9)];
    getMonsterImage();
};

Fighter.prototype.createTask = function (level) {
    let random = this.getRandomInt(0, Object.keys(this.taskСonstructor()).length - 1);
    let task = this.taskСonstructor()[Object.keys(this.taskСonstructor())[random]](level);
    this.magicBookOpened.classList.remove('active');
    this.taskModal.classList.add('active');
    this.taskModal.getElementsByTagName('h3')[0].innerText = task.title;
    this.taskModal.getElementsByClassName('example')[0].innerHTML = task.body;
    this.magicBook.classList.add('hidden');
    this.answer = task.answer;
    this.level = level;

};

Fighter.prototype.taskСonstructor = function(level){
    let _this = this;
    return {
        arithmetics: function(level){
            let operators = [['-', '+'],['*', ':']];
            let curOperator;
            let numberOne;
            let numberTwo;
            let numberThree;
            if(level == 1){
                curOperator = operators[0][_this.getRandomInt(0, operators[0].length - 1)];
                numberOne = _this.getRandomInt(1, 10);
                numberTwo = _this.getRandomInt(0, curOperator === '-' ? numberOne : Math.pow(10, level));
            } else if(level == 2){
                curOperator = operators[1][_this.getRandomInt(0, operators[1].length - 1)];
                numberTwo = _this.getRandomInt(1, 10);
                numberOne = curOperator === ':' ? _this.getRandomInt(1, 10) * numberTwo : _this.getRandomInt(1, 10);
            } else if(level == 3){
                curOperator = [
                    operators[1][_this.getRandomInt(0, operators[1].length - 1 )],
                    operators[0][_this.getRandomInt(0, operators[0].length - 1 )]
                ];
                numberTwo = _this.getRandomInt(1, 10);
                numberOne = curOperator[0] === ':' ? _this.getRandomInt(1, 10) * numberTwo : _this.getRandomInt(1, 10);
                numberThree = _this.getRandomInt(1, eval(numberOne + (curOperator[0] === ':' ? '/' : '*') + numberTwo));
            }

            return {
                title: 'Try to solve the example:',
                body: '<p>' + numberOne + '</p><p>' + curOperator[0]  + '</p><p>' + numberTwo + '</p>' + (numberThree ? '<p>' + curOperator[1] + '</p><p>' + numberThree + '</p>' : '') + '<p>=</p><input type="text" name="result" class="result" autofocus=""><input type="submit" value="answer" class="answerButton">',
                answer: eval(numberOne + (curOperator[0] === ':' ? '/' : curOperator[0]) + numberTwo + (numberThree ? curOperator[1] + '' + numberThree : ''))
            }
        },
        comparation: function (level) {
            let operators = ['>', '<', '='];
            let numberOne;
            let numberTwo;
            let numberThree;
            if(level== 1){
                numberOne = _this.getRandomInt(1,9);
                numberTwo = _this.getRandomInt(1,9);
            } else if(level ==2){
                numberOne = _this.getRandomInt(10,90);
                numberTwo = _this.getRandomInt(10,90);
            } else if (level == 3){
                numberOne = _this.getRandomInt(10, 900);
                numberTwo = _this.getRandomInt(10, 900);
            }
            return {
                title: 'Insert ">", "<" or "=" to make the expression correct:',
                body: '<p>' + numberOne + '</p>' + '<input type="text" name="result" class="result" autofocus="">'  + '<p>' + numberTwo + '</p>' + (numberThree ? '<input type="text" name="result" class="result" autofocus=""><p>'  + numberThree + '</p>' : '') + '<input type="submit" value="answer" class="answerButton">',
                answer: numberOne > numberTwo ? '>' : numberOne < numberTwo ? '<' : '='
            }
        },
        makeUpWords: function (level) {
            let words =[[['h','o','r','r','o','r'], 'horror'], [['m','a','g','i','c'], 'magic'],[['b','l','o','o','d'],'blood'], [['t','r','i','c','k'],'trick'],[['p','o', 'w','e','r'], 'power'], [['h','a','l','l','o','w','e','e','n'],'halloween']];
            let  wordToShuffle;
            let shuffled;
            let shuffledWord;
            if(level==1) {
                wordToShuffle = words[_this.getRandomInt(0, 1)];
                Array.prototype.shuffle = function () {
                    return this.sort(function () {
                        return 0.5 - Math.random();
                    });
                };
                shuffled = wordToShuffle[0].shuffle();
                shuffledWord = shuffled.concat();
            }else if(level==2){
                wordToShuffle = words[_this.getRandomInt(2, 3)];
                Array.prototype.shuffle = function () {
                    return this.sort(function () {
                        return 0.5 - Math.random();
                    });
                };
                shuffled = wordToShuffle[0].shuffle();
                shuffledWord = shuffled.concat();
            }else if(level==3){
                wordToShuffle = words[_this.getRandomInt(4, 5)];
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
        },
        sequence: function (level) {
        let difference;
        let numberOne;
        let numberTwo;
        let numberThree;
        if(level == 1){
            difference= _this.getRandomInt(2,10);
            numberOne = _this.getRandomInt(0,9);
            numberTwo = numberOne+ difference;
            numberThree = numberTwo+difference;
        }
        else if(level==2){
            difference= _this.getRandomInt(5,17);
            numberOne = _this.getRandomInt(5,27);
            numberTwo = numberOne+ difference;
            numberThree = numberTwo+difference;
        }
        else if(level==3){
            difference= _this.getRandomInt(28,110);
            numberOne = _this.getRandomInt(1,79);
            numberTwo = numberOne+ difference;
            numberThree = numberTwo+difference;
        }
            return {
                title: 'Continue the sequence',
                body: '<p>' + numberOne + '</p><p>' + numberTwo +'</p><p>' + numberThree + '</p>' + '<input type="text" name="result" class="result" autofocus="">' + '<input type="submit" value="answer" class="answerButton">',
                answer: numberThree + difference,
            }
        },
        closestNumber: function (level) {
            let numberTwo;
            let numberThree;
            let numberOne;
            if(level==1){
                numberOne = _this.getRandomInt(1,10);
                numberTwo =numberOne+1;
                numberThree = numberTwo +1;
            }
            else if(level==2){
                numberOne = _this.getRandomInt(10,100);
                numberTwo =numberOne+1;
                numberThree = numberTwo +1;
            }
            else if(level==3){
                numberOne = _this.getRandomInt(100,1000);
                numberTwo =numberOne+1;
                numberThree = numberTwo +1;
            }
            return {
                title: 'Write the lost number:',
                body: '<p>' + numberOne + '</p><p>' + numberTwo +'</p>'+ '<input type="text" name="result" class="result" autofocus="">' + '<input type="submit" value="answer" class="answerButton">',
                answer: numberThree,
            }
        },
        theLostNumber: function (level) {
            let numberOne;
            let numberTwo;
            let result;
            let operators=['+','-'];
            let operator;
            if(level == 1){
                numberOne = _this.getRandomInt(1, 10);
                numberTwo =_this.getRandomInt(1,10);
                operator= operators[_this.getRandomInt(0,1)];
                result = eval((numberOne + operator + numberTwo).toString());
            }
            else if(level == 2){
                numberOne = _this.getRandomInt(10, 100);
                numberTwo =_this.getRandomInt(0,10);
                operator= operators[_this.getRandomInt(0,1)];
                result = eval((numberOne + operator + numberTwo).toString());
            }
            else if(level ==3){
                numberOne = _this.getRandomInt(100, 500);
                numberTwo =_this.getRandomInt(0,100);
                operator= operators[_this.getRandomInt(0,1)];
                result = eval((numberOne + operator + numberTwo).toString());
            }
            return{
                title: 'Insert the right number to make the expression correct:',
                body: '<input type="text" name="result" class="result" autofocus="">'+'<p>' + operator + '<p>'+ numberTwo + '</p><p>=</p><p>'+ result +'</p><input type="submit" value="answer" class="answerButton">',
                answer: numberOne
            }
        },
        seven:function (level) {
            let exPics = ['<div class="ex-pic pumpkin"></div>', '<div class="ex-pic bat"></div>'];
            let example;
            let operator;
            let numberOne;
            let numberTwo;
            let operators = ['+', '-'];
            let answer;
            if(level==1){
                numberOne = _this.getRandomInt(2,5);
                numberTwo = _this.getRandomInt(6,12);
                operator = operators[_this.getRandomInt(0,1)];
                answer = eval((numberOne + operator + numberTwo).toString());
            }
            else if(level==2){
                numberOne = _this.getRandomInt(10,30);
                numberTwo = _this.getRandomInt(60,100);
                operator = operators[_this.getRandomInt(0,1)];
                answer = eval((numberOne + operator + numberTwo).toString());
            }
            else if(level ==3){
                numberOne = _this.getRandomInt(20,500);
                numberTwo = _this.getRandomInt(68,300);
                operator = operators[_this.getRandomInt(0,1)];
                answer = eval((numberOne + operator + numberTwo).toString());
            }
            return{
                title: 'Solve the example using pictures:',
                body: '<div class=="example-pictures"><div class="pics">' + exPics[0] + '<p>' + numberOne + '</p><p>' + exPics[1] +'<p>' + numberTwo  + '</p></div><div class="pics">'  +
                        exPics[0] + '<p>'+ operator+'</p>' + exPics[1]+ '<p>=</p>' + '<input type="text" name="result" class="result" autofocus=""><input type="submit" value="answer" class="answerButton"></div></div>',
                answer: answer
            }
        }

    }
};

Fighter.prototype.checkAnswer = function (userAnswer) {

    if(userAnswer == this.answer){
        return '<p>Correct, the monster will soon be defeated</p><button class="close-answer" value="correct">Ok</button>'
    } else {
        return '<p>Not correct, be attentive</p><button class="close-answer" value="error">Ok</button>'
    }
};

Fighter.prototype.turn = function (action) {
    let _this = this;
    let answerModal = document.getElementsByClassName('example')[0];
    let unit;
    let unitBlock;
    answerModal.innerHTML = '';
    answerModal.classList.remove('answer');
    this.taskModal.getElementsByTagName('h3')[0].innerText = '';
    this.taskModal.classList.remove('active');
    this.magicBook.classList.remove('hidden');

    if(action === 'correct'){
        unit = 'monster';
    }

    if(action === 'error'){
        unit = 'player';
    }
    unitBlock = document.getElementsByClassName(unit)[0];
    unitBlock.innerHTML += '<div class="fireball-animation"></div>';
    this.health[unit] -= this.level * 50;
    // document.getElementsByClassName('audio')[this.level].play();

    setTimeout(function () {
        if(_this.health[unit] <= 0){
            _this.unitDefeated(unit);
        } else {
            _this.unitHit(unit);
        }
    }, 1000);
};

Fighter.prototype.unitDefeated = function (unit) {
    let _this = this;
    if(unit === 'monster'){
        _this.health = {
            player: 100,
            monster: 100
        };
        _this.greetMonster();
    } else if(unit === 'player'){
        _this.taskModal.classList.add('active');
        _this.taskModal.innerHTML = '<h2>Oh, no! Game over!<br> Try again?</h2><button class="close-answer" value="error">No</button><button class="close-answer" value="replay">Ok</button>';
        let replay = document.getElementsByClassName('close-answer');
        Array.prototype.filter.call(replay, function (item) {
            item.addEventListener('click', function () {
                if(item.value == 'error'){
                    alert('see you later!');
                    _this.stopGame();
                }else if(item.value == 'replay'){
                    _this.taskModal.classList.remove('active');
                    _this.restartGame();
                }
            })
        })
    }

};

Fighter.prototype.unitHit = function (unit) {
    let unitBlock = document.getElementsByClassName(unit)[0];
    let color;
    if(this.health[unit] >= 70){
        color = 'green';
    } else if(this.health[unit] >= 50){
        color = 'yellow';
    } else if(this.health[unit] >= 30){
        color = 'orange';
    } else if(this.health[unit] >= 10){
        color = 'red';
    }
    document.getElementsByClassName('fireball-animation')[0].remove();
    unitBlock.getElementsByClassName('health')[0].style.width = this.health[unit] + '%';
    unitBlock.getElementsByClassName('health')[0].style.background = color;
    unitBlock.getElementsByClassName('health')[0].innerText = this.health[unit];
};


Fighter.prototype.stopGame = function () {

};

Fighter.prototype.restartGame = function () {
    this.health = {
        player: 100,
        monster: 100
    };

    getPlayerImage();
    this.greetMonster();
}

window.onload = function() {
    new Fighter();

};
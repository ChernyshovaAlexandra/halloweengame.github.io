let checkAnswer = require('./checkAnswer.js');
let turn = require('./turn.js');
const init = function() {

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
            answerModal.innerHTML = checkAnswer(document.getElementsByClassName('result')[0].value);
        }

        if(target === document.getElementsByClassName('close-answer')[0]){
            turn(target.value);
        }
    });
};
init();

module.exports = init;
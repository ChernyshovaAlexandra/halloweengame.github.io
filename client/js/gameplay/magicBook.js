const createTask = require('./createTask.js');
const gameData = require('./gameData.js');
const bookManipulate = function () {
    const magicBook = document.getElementsByClassName('magicBook')[0];
    const magicBookOpened = document.getElementsByClassName('magicBookOpened')[0];
    magicBook.addEventListener('click', function () {
        magicBookOpened.classList.toggle('active');
    });

    magicBookOpened.getElementsByClassName('closeBook')[0].addEventListener('click', function () {
        magicBookOpened.classList.remove('active');
    });

    Array.prototype.filter.call(magicBookOpened.getElementsByClassName('level'), function (elem, ind) {
        elem.addEventListener('click', function () {
            let data = createTask(elem.dataset.level);
            data.level = elem.dataset.level;
            gameData(data);
        })
    });
};
bookManipulate();
module.exports = bookManipulate;
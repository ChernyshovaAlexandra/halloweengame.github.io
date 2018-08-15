const setLevel = require('./setLevel.js');
const getRandomInt = require('./getRandomInt.js');

const magicBookOpened = document.getElementsByClassName('magicBookOpened')[0];
const taskModal = document.getElementsByClassName('task-modal')[0];

const createTask = function (level) {
    let tasks = setLevel();
    let tasksName = Object.keys(tasks);
    let random = getRandomInt(0, tasksName.length - 1);
    let task = tasks[tasksName[random]](level);
    magicBookOpened.classList.remove('active');
    taskModal.classList.add('active');
    taskModal.getElementsByTagName('h3')[0].innerText = task.title;
    taskModal.getElementsByClassName('example')[0].innerHTML = task.body;

    return task
};

module.exports = createTask;


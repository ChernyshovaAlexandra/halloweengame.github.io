const createUnit = require('./createUnit.js');
const monster = require('./monsterConfig.js');
const player = require('./playerConfig.js');

const restart = function () {
    createUnit(monster);
    createUnit(player);
};

module.exports = restart;
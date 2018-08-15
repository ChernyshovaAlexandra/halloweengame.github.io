let monster = require('./monsterConfig.js');
let player = require('./playerConfig.js');

const getRandomInt = require('./getRandomInt.js');
const createUnit = function(unit){
    unit.health = 100;
    if(unit == monster){
        const monsterName = document.getElementsByClassName('monsterName')[0];
        monsterName.innerHTML =  unit.nameGeneration.character[getRandomInt(0, 9)] + ' ' + unit.nameGeneration.class[getRandomInt(0, 9)] + ' ' + unit.nameGeneration.name[getRandomInt(0, 9)];
    }
    let unitHP = document.getElementsByClassName(unit.name+'_hp')[0];
        unitHP.innerText = unit.health;
        unitHP.style.width = unit.health + '%';
        unitHP.style.backgroundColor = 'green';
        unitHP.style.opacity = '1';
    let unitName = unit.name + '-icon';
    let unitIcon = document.getElementsByClassName(unitName)[0];
    let canvas = unitIcon.getElementsByTagName('canvas')[0];
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, 500, 250);
    for(let i in unit.sprites){
        let unitImage = new Image();
        unitImage.src = unit.sprites[i].path;
        unitImage.onload =
            function () {
                ctx.drawImage(
                    unitImage,
                    unit.sprites[i].sX[getRandomInt(0, unit.sprites[i].sX.length-1)], unit.sprites[i].sY,
                    unit.sprites[i].width, unit.sprites[i].height,
                    unit.sprites[i].dX, unit.sprites[i].dY,
                    unit.sprites[i].dWidth, unit.sprites[i].dHeight
                );
            };
    }
};

createUnit(monster);
createUnit(player);

module.exports =  createUnit;

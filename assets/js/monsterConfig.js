let monsterIcon = document.getElementsByClassName('monster-icon')[0];
let canvasM = monsterIcon.getElementsByTagName('canvas')[0];
let ctxM = canvasM.getContext('2d');
let monster = {
    sprites: {
        arms: {
            path: 'assets/images/monster/arms.png',
            width: 530,
            height: 373,
            sX: [0, 600, 1200, 1800, 2400, 3000, 3600, 4200, 4800], //
            sY: 0,
            dX: 12,
            dY: 30,
            dWidth: 150,
            dHeight: 60,
            rotation: 0
        },

        body: {
            path: 'assets/images/monster/bodies.png',
            width: 600,
            height: 200,
            sX: [0, 600, 1200, 1800, 2400, 3000, 3600, 4200, 4800],
            sY: 0,
            dX: 10,
            dY: 40,
            dWidth: 170,
            dHeight: 40,
            rotation: 0
        },

        legs: {
            path: 'assets/images/monster/legs.png',
            width: 600,
            height: 132,
            sX: [0, 600, 1200, 1800, 2400, 3000, 3600, 4200, 4800], //
            sY: 0,
            dX: 37,
            dY: 73,
            dWidth: 120,
            dHeight: 35,
            rotation: 0
        },

        head: {
            path: 'assets/images/monster/heads.png',
            width: 600,
            height: 359,
            sX: [0, 600, 1200, 1800, 2400, 3000, 3600, 4200, 4800],
            sY: 0,
            dX: 5,
            dY: -5,
            dWidth: 180,
            dHeight: 55,
            rotation: 0
        }


    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMonsterImage(){
    ctxM.clearRect(0,0, 500, 250);
    for(let i in monster.sprites){
        let monsterImage = new Image();
        monsterImage.src = monster.sprites[i].path;
        monsterImage.onload =
            function () {
            ctxM.drawImage(
                monsterImage,
                monster.sprites[i].sX[getRandomInt(0, monster.sprites[i].sX.length-1)], monster.sprites[i].sY,
                monster.sprites[i].width, monster.sprites[i].height,
                monster.sprites[i].dX, monster.sprites[i].dY,
                monster.sprites[i].dWidth, monster.sprites[i].dHeight
            );
            //
        };
    }
}
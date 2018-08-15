// export default {

let playerIcon = document.getElementsByClassName('player-icon')[0];
let canvas = playerIcon.getElementsByTagName('canvas')[0];
let ctx = canvas.getContext('2d');
let player = {
    sprites: {
        head: {
            path: 'assets/images/player/heads.png',
            width: 163,
            height: 150,
            sX: [0, 163, 326, 489, 652, 815],
            sY: 0,
            dX: 82,
            dY: 0,
            dWidth: 140,
            dHeight: 70,
            rotation: 0
        },

        arms: {
            path: 'assets/images/player/arms.png',
            width: 530,
            height: 373,
            sX: [-40, 447, 992, 1533, 2058, 2650], //
            sY: 0,
            dX: 86,
            dY: 52,
            dWidth: 150,
            dHeight: 60,
            rotation: 0
        },

        legs: {
            path: 'assets/images/player/legs.png',
            width: 163,
            height: 150,
            sX: [0, 169, 338, 490, 676, 845], //
            sY: 0,
            dX: 115,
            dY: 93,
            dWidth: 70,
            dHeight: 35,
            rotation: 0
        },

        body: {
            path: 'assets/images/player/bodies.png',
            width: 118,
            height: 150,
            sX: [0, 117.5, 237, 352.5, 470, 587.5],
            sY: 0,
            dX: 118,
            dY: 58,
            dWidth: 70,
            dHeight: 50,
            rotation: 0
        }

    }
};
let playerImage = getPlayerImage();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayerImage(){
    ctx.clearRect(0, 0, 500, 250);
    for(let i in player.sprites){
        let playerImage = new Image();
        playerImage.src = player.sprites[i].path;
        playerImage.onload = function () {
            ctx.drawImage(
                playerImage,
                player.sprites[i].sX[getRandomInt(0, player.sprites[i].sX.length-1)], player.sprites[i].sY,
                player.sprites[i].width, player.sprites[i].height,
                player.sprites[i].dX, player.sprites[i].dY,
                player.sprites[i].dWidth, player.sprites[i].dHeight
            );
        };
    }

}
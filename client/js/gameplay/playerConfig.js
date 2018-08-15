const player = {
    name: 'player',
    health: 100,
    sprites: {
        head: {
            path: 'client/src/images/player/heads.png',
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
            path: 'client/src/images/player/arms.png',
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
            path: 'client/src/images/player/legs.png',
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
            path: 'client/src/images/player/bodies.png',
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
module.exports = player;
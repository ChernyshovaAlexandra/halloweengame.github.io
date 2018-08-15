const monster = {
    name: 'monster',
    health: 100,
    sprites: {
        arms: {
            path: 'client/src/images/monster/arms.png',
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
            path: 'client/src/images/monster/bodies.png',
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
            path: 'client/src/images/monster/legs.png',
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
            path: 'client/src/images/monster/heads.png',
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
    },
    nameGeneration: {
        name: ['Tom', 'Bob', 'Stan', 'Maru', 'Patrick', 'John', 'Jack', 'Iohan', 'Jim', 'David'],
        class: ['ogr', 'troll', 'gremlin', 'gnome', 'orc', 'basilisk', 'elf', 'witcher', 'necromancer', 'cannibal'],
        character:['Agly', 'Rude', 'Crazy', 'Big', 'Bloody', 'Cruel', 'Brutal', 'Wicked', 'Evil', 'Demoniac']
    }
};

module.exports = monster;

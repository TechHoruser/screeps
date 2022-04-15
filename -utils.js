const utils = {
    testUtil: () => {
        console.log('Util module is ok');
    },
    makeid: (length) => {
        var result             = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    createCreep: (skills = null) => {
        if (Object.keys(Game.spawns).length === 1) {
            Game.spawns[Object.keys(Game.spawns)[0]].spawnCreep((skills ? skills : [WORK, CARRY, MOVE]), utils.makeid(5) );
        }
    },
};

module.exports = utils;
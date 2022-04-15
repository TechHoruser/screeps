const towerLogic = require('./logic.tower');
const spawnLogic = require('./logic.spawn');

const structuresLogic = {
    run: () => {
        Object.values(Game.structures).forEach(structure => {
            if(!structure.my) {
                return;
            }

            if (structure.structureType === STRUCTURE_TOWER) {
                return towerLogic.run(structure);
            }

            if (structure.structureType === STRUCTURE_SPAWN) {
                return spawnLogic.run(structure);
            }
        });
    },
};

module.exports = structuresLogic;
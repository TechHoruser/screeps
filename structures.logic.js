var towerLogic = require('tower.logic');

var structuresLogic = {
    run: () => {
        Object.values(Game.structures).forEach(structure => {
            if(!structure.my) {
                return;
            }

            if (structure.structureType === STRUCTURE_TOWER) {
                return towerLogic.run(structure);
            }
        });
    },
};

module.exports = structuresLogic;
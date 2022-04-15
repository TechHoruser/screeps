const utils = require("./-utils");

var spawnLogic = {
    /** @param StructureSpawn spawn */
    run: (spawn) => {
        if (spawn.store.getUsedCapacity(RESOURCE_ENERGY) >= 200) {
            utils.createCreep()
        }
    },
};

module.exports = spawnLogic;
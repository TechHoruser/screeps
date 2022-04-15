var towerLogic = {
    /** @param Tower tower */
    run: (tower) => {
        const closestDamagedStructure =tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (tower) => tower.hits < tower.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        const closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    },
};

module.exports = towerLogic;
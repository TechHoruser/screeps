const data = require("./data");

const roleHarvester = {
    name: 'harvester',
    
    /** @param {Creep} creep **/
    run: (creep) => {
        if (creep.store.getUsedCapacity === 0 && creep.room.find(
            FIND_STRUCTURES,
            {
                filter: (structure) => data.structureUsingEnergy.includes(structure) &&
                    structure.store.getFreeCapacity(RESOURCE_ENERGY) >= creep.store.getCapacity()
            }
        )) {
            creep.memory.role = null;
            return;
        }

        if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
            return;
        }
        
        const targets = creep.room.find(
            FIND_STRUCTURES,
            {
                filter: (structure) => data.structureUsingEnergy.includes(structure) &&
                    structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
            }
        );

        if (targets.length === 0) {
            return;
        }

        if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }
};

module.exports = roleHarvester;
const roleHarvester = require('./role.harvester');
const roleUpgrader = require('./role.upgrader');
const roleBuilder = require('./role.builder');
const data = require('./data');

const creepsLogic = {
    run: () => {
        Object.values(Game.creeps).forEach(creep => {
            creepsLogic.runByRole(creep);

            creepsLogic.assignRole(creep);
        });
    },

    /** @param {Creep} creep **/
    runByRole: (creep) => {
        if(creep.memory.role == roleHarvester.name) {
            return roleHarvester.run(creep);
        }
        if(creep.memory.role == roleUpgrader.name) {
            return roleUpgrader.run(creep);
        }
        if(creep.memory.role == roleBuilder.name) {
            return roleBuilder.run(creep);
        }
    },

    /** @param {Creep} creep **/
    assignRole: (creep) => {
        if (!creep.memory.role) {
            console.log('Assign Role:', creep.name);

            if (creep.room.find(
                FIND_STRUCTURES,
                {
                    filter: (structure) => data.structureUsingEnergy.includes(structure) &&
                        structure.store.getUsedCapacity(RESOURCE_ENERGY) < (0.5 * structure.store.getCapacity(RESOURCE_ENERGY))
                }
            ).length) {
                return creep.memory.role = roleHarvester.name;
            }

            return creep.memory.role = roleBuilder.name;
        }
    },
};

module.exports = creepsLogic;
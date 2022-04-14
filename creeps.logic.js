const roleHarvester = require('./role.harvester');
const roleUpgrader = require('./role.upgrader');
const roleBuilder = require('./role.builder');

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
            console.log('assign role');
        }
    },
};

module.exports = creepsLogic;
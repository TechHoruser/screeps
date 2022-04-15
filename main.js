const creepsLogic = require('./logic.creeps');
const structuresLogic = require('./logic.structures');

module.exports.loop = () => {
    structuresLogic.run();
    creepsLogic.run();
}
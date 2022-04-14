const creepsLogic = require('./creeps.logic');
const structuresLogic = require('./structures.logic');

module.exports.loop = () => {
    structuresLogic.run();
    creepsLogic.run();
}
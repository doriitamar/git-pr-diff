const parsingUtils = require('./lib/ParsingUtils');
const gitUtils = require('./lib/GitUtils');

module.exports = async function parser(cwd, oldBranch, newBranch) {
  const diff = await gitUtils.getDiff(cwd, oldBranch, newBranch);
  return parsingUtils.parseDiff(diff);
};

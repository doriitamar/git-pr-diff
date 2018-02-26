const parsingUtils = require('./lib/ParsingUtils');
const gitUtils = require('./lib/GitUtils');

(async function iifee() {
  const diff = await gitUtils.getDiff('/Users/itamardori/Projects/steemRSS', 'origin/master', 'origin/pr-branch');
  const files = parsingUtils.parseDiff(diff);
  console.log(files);
}());

module.exports = async function parser(cwd, oldBranch, newBranch) {
  const diff = await gitUtils.getDiff(cwd, oldBranch, newBranch);
  return parsingUtils.parseDiff(diff);
};

const parse = require('diff-parse');
const gitUtils = require('./lib/GitUtils');

module.exports = async function parser(cwd, oldBranch, newBranch) {
  const diff = await gitUtils.getDiff(cwd, oldBranch, newBranch);
  return parse(diff);
};

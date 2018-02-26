const { promisify } = require('util');
const { exec } = require('child_process');

const execPromise = promisify(exec);

async function getDiff(cwd, oldBranch, newBranch) {
  try {
    const { stdout, stderr } = await execPromise(`git --no-pager diff ${oldBranch}...${newBranch}`, {
      cwd,
      windowsHide: true,
    });

    if (stderr) throw new Error(stderr);
    return stdout;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getDiff,
};

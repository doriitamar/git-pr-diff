const parse = require('diff-parse');

function getFileType(file) {
  if (file.from === '/dev/null') {
    return 'add';
  } else if (file.to === '/dev/null') {
    return 'del';
  } else if (file.from === file.to) {
    return 'normal';
  }
  return 'moved';
}

function parseDiff(diff) {
  const parsed = parse(diff);
  return parsed.filter(file => file.additions > 0 || file.deletions > 0).map((file) => {
    const newFile = file;
    newFile.type = getFileType(newFile);
    return newFile;
  });
}

module.exports = {
  parseDiff,
};

# git-pr-diff
A git pull request diff parser. It's just a wrapper for the `diff-parser` module, so it'll work well with git.


# API

## Parser

```js
require('git-pr-diff')(cwd: string, oldBranch: string, newBranch: string)
```

### Parameters:
* `cwd`: Path of the local git repo
* `oldBranch`: The branch to merge into
* `newBranch`: The branch to merge from




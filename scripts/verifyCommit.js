const fs = require("fs");

const msg = fs.readFileSync(".git/COMMIT_EDITMSG", "utf-8").trim();
const mergeRE = /^(Merge pull requesst|Merge branch)/;
const commitRE =
  /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  if (!mergeRE.test(msg)) {
    console.log("git commit message format error");
    console.error(`需要使用以下格式 type(module): message
具体逻辑请看scripts/verifyCommit.js`);
    process.exit(1);
  }
} else {
  console.log("git commit校验通过");
}
// feat(hooks):message
// feat:message
// revert:feat:message //撤回

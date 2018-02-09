// Default exports can be imported like so
//assumes files are .js if unspecified
// import export are not truly adopted yet. must use transpiler
import beforeRemove from "./data/beforeRemove";
import beforeUniq from "./data/beforeUniq";
import beforeObj from "./data/before0bj";
//probably still use require in server file

// Named exports can be imported individually like so
import { remove, uniq, arrToObj, random } from "./utils";
//if folder import and no file specified it defaults ot index

console.log("beforeRemove:", beforeRemove, "\n");
const afterRemove = remove(beforeRemove, 23);
console.log("afterRemove:", afterRemove, "\n");

console.log("beforeUniq", beforeUniq, "\n");
const afterUniq = uniq(beforeUniq);
console.log("afterUniq", afterUniq, "\n");

console.log("beforeObj", beforeObj, "\n");
const afterObj = arrToObj(beforeObj);
console.log("afterObj", afterObj, "\n");

const randomNum = random(1, 42);
console.log(randomNum);

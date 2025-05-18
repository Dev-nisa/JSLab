var globalVar = "I'm so freakin global";
let globalLet = "I'm global, but scoped with let";
const globalConst = "I'm a global constant and that's that!";

// Block scope
{
var blockVar = "I am a blocked-scoped var!";
let blockLet = "I'm a blocked-scoped let! Take that!"
const blockConst = "I'm a block-scoped const, dagnamit!"
}

// Global test
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Block test
// console.log(blockVar);
// console.log(blockLet);

function show() {
    var functionVar = "I'm a block-scoped var";
    let functionLet =  "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);
const stripA = 'foo';
const keepA = 'foo';

let stripB;
let keepB;

stripB = 'foo';
stripB = {};
keepB = 'foo';

export const stripC = {};
export const keepC = {};

export { stripD };
export { keepD };

export default { stripA, keepA };

console.log(stripA);
console.log(keepA);

if (stripA === 'foo') {}
if (keepA === 'foo') {}

if (stripB === 'foo' && keepB === 'foo') {}

keepA = stripA;
keepB = stripB && keepB;

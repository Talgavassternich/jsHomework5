const compose = (...functions) => arr => functions.reduceRight((arg, fn) => fn(arg), arr);
const m = el => el.map((curr) => curr * 3);
const plus = el => el + 3;
const reduceMultiply = el => el.reduce((acc, curr) =>  acc * curr);
console.log(compose(plus, reduceMultiply, m)([1, 4, 7]));
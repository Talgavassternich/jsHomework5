const concat = (arr1, arr2) => {
    return Array.isArray(arr2) ? [...arr1, ...arr2] : [...arr1, arr2];
};
const filter = (arr1, fn) => {
    return arr1.reduce((acc, curr) => {
        if (fn(curr)) {
            return [...acc, curr];
        }
        return acc;
    }, []);
};
const find = (arr1, fn) => {
    return arr1.reduce((acc, curr) => {
        if (acc !== undefined) {
            return acc;
        }
        if (fn(curr)) {
            return curr;
        }
        return acc;
    }, undefined);
};
const findIndex = (arr1, fn) => {
    return arr1.reduce((acc, curr, index) => {
        if (acc < 0 && fn(curr)) {
            return index;
        }
        return acc;
    }, -1);
};
const includes = (arr1, el) => {
    return arr1.reduce((acc, curr) => {
        if (!acc) {
            return curr === el;
        }
        return acc;
    }, false);
};
const indexOf = (arr1, el) => {
    return arr1.reduce((acc, curr, index) => {
        if (acc < 0 && curr === el) {
            return index;
        }
        return acc;
    }, -1);
};
const map = (arr1, fn) => {
    return arr1.reduce((acc, curr) => {
        return [...acc, fn(curr)];
    }, []);
};
const reverse = (arr1) => {
    return arr1.reduce((acc, curr) => {
        acc.unshift(curr);
        return acc;
    }, []);
};
const some = (arr1, fn) => {
    return arr1.reduce((acc, curr) => {
        if (!acc) {
            return fn(curr);
        }
        return acc;
    }, false);
};
const every = (arr1, fn) => {
    return arr1.reduce((acc, curr) => {
        if (acc) {
            return fn(curr);
        }
        return acc;
    }, true);
};
console.log(concat([1, 2, 3], [4, 5, 7]));
console.log(filter([1, 2, 3, 6, 12, 143], (n) => {return (n % 2) === 0}));
// console.log(find([1, 2, 3, 6, 12, 143], (n) => {return n > 10}));
// console.log(findIndex([1, 2, 3, 6, 12, 143], (n) => {return n > 10}));
// console.log(includes([1, 2, 3, 6, 12, 143], 143));
// console.log(indexOf([1, 2, 3, 6, 12, 143], 12));
console.log(map([1, 2, 3, 6, 12, 143], (n) => {return n * 2}));
// console.log(reverse([1, 2, 3, 6, 12, 143]));
// console.log(some([1, 2, 3, 6, 12, 143], (n) => {return n > 142}));
// console.log(every([1, 2, 3, 6, 12, 143], (n) => {return n > 0}));
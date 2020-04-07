const fib = (n) => {
    console.log(n);
    if (n <= 1) {
        return n;
    } else {
        return fib(n-1) + fib(n - 2);
    }
};

const fibon = (n, curr) => {
    if (!curr) {
        if (n === 0) {return 0;}
        const newArr = [0];
        return fibon(n - 1, newArr);
    }
    switch (curr[curr.length - 1]) {
        case 0:
            curr.push(1);
            if (n === 0) {
                return curr[curr.length - 1];
            }
            return fibon(n - 1, curr);
        case 1:
            if (curr.length === 2) {
                curr.push(1);
            } else {
                curr.push(2);
            }
            if (n === 0) {
                return curr[curr.length - 1];
            }
            return fibon(n - 1, curr);
        default:
            curr.push(curr[curr.length - 1] + curr[curr.length - 2]);
            if (n === 0) {
                return curr[curr.length - 1];
            }
            return fibon(n - 1, curr);
    }
};

const fibonacci = (num) => {
    if (num === 0) {
        switch (fibonacci.curr) {
            case undefined:
                return 0;
            case 0:
            case 1:
                delete fibonacci.curr;
                return 1;
            default:
                let temp = fibonacci.curr;
                delete fibonacci.curr;
                return temp;
        }
    } else {
        switch (fibonacci.curr) {
            case undefined:
                fibonacci.curr = 0;
                break;
            case 0:
                fibonacci.curr = 1;
                break;
            default:
                fibonacci.curr = fibonacci.curr + Math.round(fibonacci.curr / ((1 + Math.sqrt(5)) / 2));
        }
    }
    return fibonacci(num - 1);
};

const test = fn => {
    for (let i = 0; i < 10; i++) {
        console.log(fn(i));
    }
}
test(fibonacci);
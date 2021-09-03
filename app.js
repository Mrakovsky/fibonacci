'use strict';
const meno = new Map();
meno.set(0,0)
meno.set(1,1)

function fib(n) {
    if (meno.has(n)) {
        return meno.get(n);
    }
    const value = fib(n - 1)+ fib(n - 2);
    // const value = meno.get(n - 1)+ meno.get(n - 2);
    meno.set(n,value)
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    //console.log((i)+'番目のフィボナッチ数は'+ fib(i)+'です。');
    console.log(`${i}番目のフィボナッチ数は${fib(i)}です。`);

} 
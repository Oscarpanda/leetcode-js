
async function async1() {
    await async2();
}
async function async2() {
    //async2做出如下更改：
    new Promise(function(resolve) {
    resolve();
}).then(function() {
    });
}

setTimeout(function() {
}, 0)
async1();

new Promise(function(resolve) {
    resolve();
}).then(function() {
});

console.log('script start');
console.log('async1 start');
console.log('promise3');
console.log('promise4');
console.log('promise1');
console.log('async1 end');
console.log('promise2');
console.log('setTimeout');
function sum(x, y) {
    if (x === void 0) { x = 12; }
    if (y === void 0) { y = 4; }
    return x;
}
var z = function () {
    return 2;
};
z(undefined, undefined);
var x;
x = function (x, y) {
    return 3;
};
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
// function reverse(x: string): string;
// function reverse(x: number): number {}; 
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// reverse(123)
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}

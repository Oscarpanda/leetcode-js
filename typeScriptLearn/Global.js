var b = new Boolean(1);
var e = new Error('error occurred');
var d = new Date();
var r = /[a-a]/;
function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'

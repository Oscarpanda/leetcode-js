let b: Boolean = new Boolean(1);
let e: Error = new Error('error occurred');
let d: Date= new Date();
let r: RegExp= /[a-a]/;
// 类型别名
type Name = string;
type NameResolver = ()=> string;
type NameORResolver = Name |NameResolver ;
// 字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
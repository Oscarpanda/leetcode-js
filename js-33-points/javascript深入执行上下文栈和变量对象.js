var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
      console.log(scope)
        return scope;
    }
    return f();
}
checkscope();
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

a.x 	// 这时 a.x 的值是多少
b.x
点优先
//context为需要被绑定上的对象，arguments是参数
Function.prototype.bind = function(){
  var self = this; //this => Function
  var context = [].shift.call(arguments); //arguments 的第一个为需要绑定的this上下文
  var args = [].slice.call(arguments)// arguments除了第一个，成为一个数组
  return function(){
      return self.apply(context,[].concat.call(args,[].slice.call(arguments)))
  }
}
//运行
var obj = {name: 'shaojingjing'}
var func = function(a,b,c,d){
  alert(this.name); // shaojingjing
  alert([a,b,c,d]) // [1,2,3,44]
}.bind(obj,1,2)(3,4)
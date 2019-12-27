// let handler = {
//     get: function(target, name){
//         console.log("x");
//         if(target[name] == undefined)
//         return 37; 
//         let zz = target.next
//         setTimeout(() => {
//           zz.pre.next
//         },10000)
//         return zz.next;
//         // return name in target ? target[name] : 37;
//     }
// };
let handler = {
    get: function(target, name){
      console.log("x");
        return 37; 
        // return name in target ? target[name] : 37;
    }
};

let p = new Proxy([2,3,1], handler);
p[2]
// let q = new Proxy({"num":2}, handler);
// p.num.numw
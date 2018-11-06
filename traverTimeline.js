function Node(data) {
    this.data = data;
    this.children = new Array();
    this.value = 1;
    this.index = -1;
    this.pre_index = -1;
}
function insertNode(parent, child){
    parent.children.push(child);
}
node1 = new Node(1);node1.index=1;
node2 = new Node(2);node2.value=2;
node3 = new Node(3);
node4 = new Node(4);
node5 = new Node(5);
node6 = new Node(6);
node7 = new Node(7);
node8 = new Node(8);
node9 = new Node(9);node9.value=2;
node10 = new Node(10);
node11 = new Node(11);
node12 = new Node(12);node12.value=2;
node13 = new Node(13);node13.value=2;
node14 = new Node(14);
insertNode(node1, node2);
insertNode(node2, node3);
insertNode(node2, node4);
insertNode(node3, node6);
insertNode(node4, node5);
insertNode(node5, node6);
insertNode(node6, node7);
insertNode(node6, node8);
insertNode(node6, node9);
insertNode(node7, node10);
insertNode(node8, node10);
insertNode(node9, node10);
insertNode(node10, node11);
insertNode(node10, node13);
insertNode(node11, node12);
insertNode(node12, node14);
insertNode(node13, node14);



console.log(node1)

function travelDeep(root) {
    queue = new Array();
    queue.push(root); // stack
    while(queue.length != 0){
        var cur_node = queue.pop();
        console.log(cur_node.data);
        for(var i=0; i < cur_node.children.length; i++){
            var child = cur_node.children[i];
            queue.push(child);
        }
    }
}
function travelBread(root) {
    queue = new Array();
    queue.push(root); // stack
    while(queue.length != 0){
        var cur_node = queue.shift();
        console.log(cur_node.data);
        for(var i=0; i < cur_node.children.length; i++){
            var child = cur_node.children[i];
            queue.push(child);
        }
    }
}
function travelBreadNoReaptWay1(root) {
    queue = new Array();
    queue.push(root); // stack
    const history = new Set();
    while(queue.length != 0){
        var cur_node = queue.shift();
        history.add(cur_node);
        console.log(cur_node.data);
        for(var i=0; i < cur_node.children.length; i++){
            var child = cur_node.children[i];
            if (!history.has(child)) {
                queue.push(child);
            }

        }
    }
}
function travelBreadNoReaptWay2(root) {
    queue = new Array();
    queue.push(root); // stack
    const history = new Set();
    while(queue.length != 0){
        var cur_node = queue.shift();
        if (history.has(cur_node)) continue;
        history.add(cur_node);
        console.log(cur_node.data);
        for(var i=0; i < cur_node.children.length; i++){
            var child = cur_node.children[i];
            queue.push(child);
        }
    }
}
travelBreadNoReaptWay2(node1);
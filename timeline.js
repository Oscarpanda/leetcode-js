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
function initIndexcopy(root) {
    queue = new Array();
    in_queue_flags = new Set();
    queue.push(root);
    while(queue.length != 0){
        var cur_node = queue.shift();
        var next_value = cur_node.index + cur_node.value;
        for(var i=0; i < cur_node.children.length; i++){
            var child = cur_node.children[i];
            if(child.value <= next_value){
            child.index = next_value;
            child.pre_index = cur_node.index;
            var child_next_value = child.index + child.value;
            for(var j=0; j < child.children.length; j++){
                var child_child = child.children[j];
                if(child_child.value <= child_next_value){
                    child_child.index = child_next_value;
                    child_child.pre_index = child_child.index;
                }
            }
            }
        }
        if(in_queue_flags.has(cur_node)) continue;
        in_queue_flags.add(cur_node);
        console.log(cur_node.data);
        for(var i=0; i < cur_node.children.length; i++){
            var child = cur_node.children[i];
            queue.push(child);
        }
    }
}

function initIndex(root) {
    queue = new Array();
    in_queue_flags = new Set();
    queue.push(root);
    in_queue_flags.add(root);
    while(queue.length != 0){
        var cur_node = queue.shift();
        in_queue_flags.delete(cur_node);
        var next_value = cur_node.index + cur_node.value;
        console.log(cur_node.data);
        for(var i=0; i < cur_node.children.length; i++){
            var child = cur_node.children[i];
            if(child.value <= next_value){
                child.index = next_value;
                child.pre_index = cur_node.index;
                if(!in_queue_flags.has(child)){
                    queue.push(child);
                    in_queue_flags.add(child);
                }
            }
        }
    }
}
function travelBreadNoReaptWay2(root, callback) {
    queue = new Array();
    queue.push(root); // stack
    const history = new Set();
    while(queue.length != 0){
        var cur_node = queue.shift();
        if (history.has(cur_node)) continue;
        history.add(cur_node);
        callback(cur_node);
        // console.log(cur_node.data);
        for(var i=0; i < cur_node.children.length; i++){
            var child = cur_node.children[i];
            queue.push(child);
        }
    }
}
initIndexcopy(node1);
travelBreadNoReaptWay2(node1, (node) => {
    console.log(`data=${node.data}, index=${node.index}`);
})
import LinkedList from "./LinkedList.js";
import Node from "./Node.js";



// let node1 = Node(2);
// let node2 = Node(5);
// node1.next = node2;

const list = LinkedList();

list.append(7);
list.append(2);
list.append(5);
console.log(list.head);

// console.log(list.head.value);

// example uses class syntax - adjust as necessary
// const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");

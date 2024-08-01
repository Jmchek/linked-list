import Node from "./Node.js";

const LinkedList = () => {
    let head = null;

    const append = (value) => {
        const newNode = Node(value);
        
        if(head === null){
            return (head = newNode);
        } 
        
        let tmp = head;

        while(tmp.next !== null){
            tmp = tmp.next;
        }

        tmp.next = newNode;

        
    };

    // const prepend = (value) => {
    //     let tmp = head;
    //     head = Node(value);
    //     head.next = tmp;
    // };

    // const size = () => {
    //     let count = 0;
    //     let tmp = head;

    //     while(tmp){
    //         count++;
    //         tmp = tmp.next;
    //     }

    //     return count;
    // }

    return { append };
}

export default LinkedList;
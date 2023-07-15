type node = {
    next: node | null,
    content: any
}

class LinkedList<T> {
    private firstNode: node | null

    constructor(s: T[]) {
        this.firstNode = null
        this.populateList(s)
    }

    public populateList: Function = (s: T[]) => {
        s.forEach((n: T) => {
            let insertValue: node = {
                next: null,
                content: n
            }; 
            this.insertIntoLinkedList(insertValue);
        })
    }

    public insertIntoLinkedList: Function = (node: node) => {
        if (this.firstNode == null) {
            this.firstNode = node
        } else {
            let temp: node = this.firstNode
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }

    public readLinkedList: Function = () => {
        if (this.firstNode != null)
        {
            let temp: node = this.firstNode
            console.log(temp.content);
    
            while (temp.next != null) {
                temp = temp.next
                console.log(temp.content)
            }
        }
    
    }
}

let ll = new LinkedList(process.argv.slice(2))
ll.readLinkedList()

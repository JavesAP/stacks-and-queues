export type QueueType<T> = {
  enqueue(data: T): void
  dequeue() : T | null
  front(): T | null
  isEmpty(): string
  size(): number
  print(): void
}
// Step 1: Create a Queue class
// - Define a class named Queue.
// - Look into the private keyword. Make sure we can initialize a queue of any input type.
// - Initialize the queue in the constructor. Remember, we may need to utilize other data structures here to create the behavior we are looking for.

// Step 2: Implement enqueue method
// - Create a method to add an element to the queue.
// - Add the element to the end of the array.

// Step 3: Implement dequeue method
// - Create a method to remove the first element.
// - If the queue is empty, return null.
// - Otherwise, remove and return the first item.

// Step 4: Implement front method
// - Create a method to return the first element without removing it.
// - If the queue is empty, return null.

// Step 5: Implement isEmpty and size methods
// - Create a method to check if the queue is empty.
// - Create a method to return the number of elements in the queue.

// Step 6: Implement print method
// - Create a method to display the queue elements.
// - Print elements in order, separated by "<-".

export class Queue<T> implements QueueType<T> {
  private stack1;
  private stack2;
  constructor() {
    this.stack1 = [] // "enqueue" stack
    this.stack2 = [] // "dequeue" stack
  }

  enqueue(data: T) {
    this.stack1.push(data)
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()) //reverse enqueue into dequeue
      }
    }
    if (this.stack1.length === 0) {
      return null
    }
    return this.stack2.pop()
  }

  front() {
    if (this.stack2.length) {
      return this.stack2[this.stack2.length - 1]
    } else if (this.stack1.length) {
      return this.stack1[0]
    } else null
  }
  
  isEmpty() {
    const queueItems = this.size()
    return queueItems > 0 ? "Currently not empty" : "no current items in queue"
  }
  
  size() {
   return this.stack1.length + this.stack2.length
  }
  
  print() {
    if (this.stack1.length && this.stack2.length) {
       console.log([...this.stack2.reverse(), ...this.stack1].join(' <- '))
    } else if (this.stack2.length) {
       console.log(this.stack2.reverse().join(' <- '))
    } else if (this.stack1.length) {
      console.log(this.stack1.join(' <- '))
    } else console.log("there is nothing to print")
  }
}

// Uncomment The Code Below to See If It Works! Feel free to write more code to test and examine the functionality of the queue.
// const queue = new Queue<number>(); // Create a queue that stores numbers
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.print(); // Output: 10 <- 20 <- 30
// console.log(queue.dequeue()); // 10
// console.log(queue.front()); // 20
// console.log(queue.size()); // 2
// console.log(queue.isEmpty()); // false

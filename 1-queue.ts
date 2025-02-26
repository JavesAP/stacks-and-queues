export class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Step 2: Enqueue method
  enqueue(element: T): void {
    this.items.push(element);
  }

  // Step 3: Dequeue method
  dequeue(): T | null {
    return this.items.length === 0 ? null : this.items.shift() || null;
  }

  // Step 4: Front method
  front(): T | null {
    return this.items.length === 0 ? null : this.items[0];
  }

  // Step 5: isEmpty and size methods
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  // Step 6: Print method
  print(): void {
    console.log(this.items.join(" <- "));
  }
}

// Uncomment The Code Below to See If It Works!
const queue = new Queue<number>(); // Create a queue that stores numbers
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10 <- 20 <- 30
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false

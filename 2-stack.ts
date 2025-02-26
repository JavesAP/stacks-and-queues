class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Step 2: Push method
  push(element: T): void {
    this.items.push(element);
  }

  // Step 3: Pop method
  pop(): T | null {
    return this.items.length === 0 ? null : this.items.pop() || null;
  }

  // Step 4: Peek method
  peek(): T | null {
    return this.items.length === 0 ? null : this.items[this.items.length - 1];
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
    console.log(this.items.join(" | "));
  }
}

// Uncomment The Code Below to See If It Works!
const stack = new Stack<number>(); // Create a stack that stores numbers
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10 | 20 | 30
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false

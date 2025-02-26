import { Queue } from "../1-queue";
import { Stack } from "../2-stack";

// ==============================
// [1] Print the First `N` Numbers in Increasing Order using a Queue
// ==============================

function printNumbers(n: number): number[] {
  const queue = new Queue<number>();
  const result: number[] = [];

  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (!queue.isEmpty()) {
    result.push(queue.dequeue() as number);
  }

  return result;
}

// ==============================
// [2] Reverse a Queue
// ==============================

function reverseQueue(queue: Queue<number>): void {
  const stack = new Stack<number>();

  // Step 1: Dequeue all elements into the stack
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue() as number);
  }

  // Step 2: Pop all elements back into the queue (reversed order)
  while (!stack.isEmpty()) {
    queue.enqueue(stack.pop() as number);
  }
}

// ==============================
// [3] Generate the First N Fibonacci Numbers using a Queue
// ==============================

function generateFibonacci(n: number): number[] {
  if (n <= 0) return [];

  const queue = new Queue<number>();
  const result: number[] = [0, 1];

  queue.enqueue(0);
  queue.enqueue(1);

  for (let i = 2; i < n; i++) {
    const first = queue.dequeue() as number;
    const second = queue.front() as number; // Peek the next number

    const nextFib = first + second;
    queue.enqueue(nextFib);
    result.push(nextFib);
  }

  return result.slice(0, n);
}

// ==============================
// [4] Reverse Words in a Sentence Using a Queue
// ==============================

function reverseWords(sentence: string): string {
  const words = sentence.split(" ");
  const queue = new Queue<string>();

  for (const word of words) {
    queue.enqueue(word);
  }

  const reversedWords: string[] = [];
  while (!queue.isEmpty()) {
    reversedWords.unshift(queue.dequeue() as string);
  }

  return reversedWords.join(" ");
}


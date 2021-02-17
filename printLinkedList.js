class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(node) {
  let currentNode = node
  while (currentNode != null) {
    console.log(currentNode.value)
    currentNode = currentNode.next
  }
}

// let el5 = new Node('task 5', null)
// let el4 = new Node('task 4', el5)
// let el3 = new Node('task 3', el4)
// let el2 = new Node('task 2', el3)
// let el1 = new Node('task 1', el2)

// solution(el1)
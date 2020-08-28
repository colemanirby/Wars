class Example {

    wasArgumentPassedIn: boolean;

    constructor(initialValue: boolean) {

        this.wasArgumentPassedIn = initialValue;

    }


    words: string;
    numbers: number;
    array: string[];
    //    0         1         2
    // ["first", "second", "third"]
    truthyOrFalsey: boolean;
    // true or false or undefined (false)
    anything: any;
    anythingArray: any[];

    exampleArray: Example[];
}

class Demo{

    example: Example;

    constructor() {
        this.example = new Example(true);
        this.example = new Example(false);

        this.example.array = [];
        this.example.array.push("first");
        this.example.array.push("second");
        this.example.array.push('third');
        console.log(this.example.array[0]);
        // prints 'first'
        // first name 0
        // last name 1

        this.example.truthyOrFalsey = true;

        const value = this.recursiveFunction(this.example, this.example.array, 1);

    }

    forLoops(exampleArgument: Example) {
        //     0        1          2       3
        // ["first", "second", "third"]
        // exampleArgument.array.length -> 3

        for (var i = 0; i++; i <= exampleArgument.array.length - 1) {
            console.log(exampleArgument.array[i]);
        }

        for (let fuckboi of exampleArgument.array) {
            console.log(fuckboi);
        }

        for (var i = 0; i++; i <= exampleArgument.exampleArray.length - 1) {
            const example = exampleArgument.exampleArray[i];
        }

        for (var i = exampleArgument.array.length-1; i--; i >=0) {
            const example = exampleArgument.exampleArray[i];
        }

        for(let example of exampleArgument.exampleArray) {
            example.anything
            example.array;
        }

        let example = new Example(true);

        exampleArgument.exampleArray.forEach(element => {

            return example.truthyOrFalsey != element.truthyOrFalsey; 
            
        });




    }

    ifStatements(exampleArgument: Example) {

        if(exampleArgument.truthyOrFalsey) {
            this.doThis()
        } else {
            this.doThat()
        }

        if(exampleArgument.words) {
            const words = exampleArgument.words.toLowerCase();
            this.example = new Example(true);
        }

        if(exampleArgument.words) {
            this.doThis()
        } else if(exampleArgument.words === "Coleman") {
            this.doThat();
        } else if(exampleArgument.words === "Colter") {
            this.doThat()

        } else {
            this.doWhatever()
        }
    }

    doThis() {

    }

    doThat() {

    }

    doWhatever() {

    }

    recursiveFunction(example: Example, array: string[], i: number) {

        if(example.truthyOrFalsey) {
            this.recursiveFunction(example, example.array, i);
        } else {
            return example.array;
        }
    }

    whileLoop(bool: boolean, num: number) {
        bool = true;
        num = 0;

        while(bool) {

            // do something
            if(num > 2) {
                bool = false
            }

            console.log(num);

            num++;



        }

        //do other things
    }

    // recursiveFunction ()
    //  --> recursiveFunction
    //      --> recursiveFunction
    // ... infinity

    // value = <-- recursiveFunction () 
    // --> recursiveFunction() ^
    //  --> recursiveFunction () ^
}

















/**  Singly Linked List - Common Data structure, but not offered by default by TypeScript
 * 
 * Linked List Structure:
 * Node based data strucutre where each node only 
 * knows about the next node in the linked list
 * head                tail
 *  O   -> O -> ... -> O
 * 
 * Node Code Structure:
 * 
 * class Node {
 * 
 * next: Node;
 * value: number;
 * 
 * 
 * }
 * 
 * How does it look when you create a new linked list?
 * Head    Tail
 * O    ->   O
 * 
 * Linked List Code Structure:
 * 
 * class SinglyLinkedList {
 * 
 * private head: Node;
 * private tail: Node;
 * private size: number = 0;
 * 
 * constructor() {
 * 
 *  this.head = new Node();
 *  this.tail = new Node();
 *  this.head.next = this.tail;
 * }
 * 
 * 
 * insertNode(){
 *  size++;
 * }
 * 
 * returnLinkedListAsArray(){}
 * 
 * removeLastNode(){
 *  size--;
 * }
 * 
 * 
 * 
 * isEmpty(){
 *     isEmpty = false;
 * 
 *     if(this.head.next === this.tail) {
 *          isEmpty = true;
 *      }
 * 
 *      return isEmpty;
 * 
 *      return this.head.next === this.tail;
 * 
 *      return this.size === 0;
 * }
 * 
 * 
 * head
 * O
 * head tail
 * O      O
 * linkage
 * head     tail
 * O     -> O
 * 
 * inserting Node
 * head        Tail
 * O   -> O -> O
 * 
 * 
*/















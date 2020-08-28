import {Node} from './node'
import { NullTemplateVisitor } from '@angular/compiler';
export class LinkedList<T> {

    private head: Node<T>;
    private tail: Node<T>;
    private size: number = 0;

    constructor() {

        this.head = new Node<T>();
        this.tail = new Node<T>();
        this.head.next = this.tail;

    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public insertFirst(value: T): void {

        const newNode = new Node<T>(value);

        newNode.next = this.head.next;
        this.head.next = newNode;
        this.size++;
        
    }

    public insertLast(value: T): void {

        const newNode = new Node<T>(value);

        var searchNode = this.head;

        while(searchNode.next !== this.tail) {
            searchNode = searchNode.next;
        }

        searchNode.next = newNode;
        newNode.next = this.tail;
        this.size++;


    }

    public removeFirst(): T | null {
        const returnNode = this.head.next;
        this.head.next = returnNode.next;
        returnNode.next = null;
        this.size--;

        return returnNode.value;
    }

    public removeLast(): T | null {

        if (this.isEmpty) {
            return null; 
         }

        var finalNode = this.head.next;
        var previousNode;

        while(finalNode.next !== this.tail) {
            previousNode = finalNode;
            finalNode = finalNode.next
        }

        previousNode.next = this.tail;
        finalNode.next = null;
        return finalNode.value;
    }

    public remove(searchKey: T): T | null {

        var currentNode = this.head.next;
        var previousNode = null;
        var valueFound = true;

        // really ugly implementation of a remove function. Shouldn't check null so much. Need to refactor
        while(currentNode.next!== this.tail) {
            if(currentNode.value === searchKey) {
                if(previousNode!==null){
                    previousNode.next = currentNode.next;
                    this.size--;
                    return currentNode.value;
                } else {
                    this.size--;
                    this.head.next = currentNode.next;
                    return currentNode.value;
                }
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        return null;
    }

    public contains(searchValue: T): boolean {
        var currentNode = this.head.next;
        var valueFound = true;

        while(currentNode.value !== searchValue) {
            if(currentNode.next === this.tail) {
                valueFound = false;
            }
            currentNode = currentNode.next;
        }

        return valueFound;
    }

    public getFirst(): T | null {
        return this.head.next ? this.head.next.value : null;
    }

    public listContents(): void {
        let currentNode = this.head.next;

        while(currentNode !== this.tail) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }

    }

    public length(): number {
        return this.size;
    }

    public getList(): number[] {
        var list = [];
        if(this.isEmpty()) {
            return list;
        } else {
            let currentNode = this.head.next;
            while(currentNode !== this.tail) {
                list.push(currentNode.value);
                currentNode = currentNode.next;
            }
            return list;
        }
    }
}
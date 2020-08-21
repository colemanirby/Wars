
export class Node<T> {

    public value: T | null;
    public next: Node<T> | null;

    public constructor(value: T | null = null) {
        this.value = value;
        this.next = null;
    }
}

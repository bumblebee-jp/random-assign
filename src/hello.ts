export class Hello {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    greeting(): void {
        console.log('Hello', this.name);
    }

    getName(): string {
        return this.name;
    }
}

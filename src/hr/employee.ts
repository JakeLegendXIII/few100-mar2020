export class Employee {
    constructor(private salary: number = 50_000, public firstName?: string, public lastName?: string) {
    }
    getSalary() {
        return this.salary;
    }
    get fullName(): string {
        return `${this.lastName}, ${this.firstName}`;
    }
}

import { Employee, VacationRequest, DAYS_OF_PTO as pto } from '../src/hr';
import * as fromhr from '../src/hr';

describe('using classes', () => {
    describe('creating instances', () => {
        it('demo', () => {
            expect(pto).toBe(23);
            const jim = new fromhr.Employee(30_000, 'James', 'Keele');
            expect(jim.getSalary()).toBe(30_000);
        });
        it('using constructors', () => {
            const bob = new Employee(45_000, 'Robert', 'Jones');

            expect(bob.getSalary()).toBe(45_000);
            expect(bob.firstName).toBe('Robert');
            expect(bob.lastName).toBe('Jones');
            expect(bob.fullName).toBe('Jones, Robert');

            const sue = new Employee(undefined, 'Sue', 'Smith');
            expect(sue.getSalary()).toBe(50_000);
            expect(sue.firstName).toBe('Sue');
            sue.firstName = 'Susan';
            expect(sue.firstName).toBe('Susan');

            const vacation = new VacationRequest(sue);
            expect(vacation.employee.firstName).toBe('Susan');
        });
    });
});

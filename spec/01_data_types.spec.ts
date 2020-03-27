describe('declaring variables in typescript', () => {
    it('constant might not mean what you think it means', () => {
        // const means the variable cannot be reassigned to.
        const pi = 3.14;
        // pi = 3;
        const numbers = [1, 2, 3];
        // numbers = [9, 2, 3]; will not work
        numbers[0] = 9;
        expect(numbers[0]).toBe(9);
        const movie = { title: 'Jaws', yearReleased: 1979 };
        // movie = { title} will not work
        movie.yearReleased = 1977;
        expect(movie.yearReleased).toBe(1977);
    });
    describe('typing', () => {
        it('implicitly typed variables', () => {
            let name = 'Joe';
            name = 'ray';
        });
        it('explicitly typed variables', () => {
            let name: string;
            name = 'Sue';
        });
        it('union types', () => {
            let thingy: string | number | string[] = 'tacos';
            thingy = 'enchiladas';
            thingy = 42;
            thingy = ['tacos', 'enchiladas'];
        });
        it('type aliases', () => {
            type ThingsWithLettersAndStuff = string;
            const name: ThingsWithLettersAndStuff = 'Joe';
            type MathOperation = (a: number, b: number) => number;
            const add: MathOperation = (a, b) => a + b;
            expect(add(2, 2)).toBe(4);
            const subtract: MathOperation = function (a: number, b: number) {
                return a - b;
            };
        });
    });
});

describe('literals', () => {
    describe('string literals', () => {
        it('has them', () => {
            const message = 'she told me "You look nice today!"';
            const message2 = 'The Author was Flannery O\'Conner';
            // tslint:disable-next-line: quotemark
            const message3 = "The Author was Flannery O'Connor";
        });
        it('has template strings', () => {
            const message = `She told me "You look nice today!"`;
            const message2 = `THe Author was Flannery O'Connor`;
            // @"" in C#
            const story = `Life Story
            it was a dark and stormy night. blah blah.
            The end.
            `;
            // tslint:disable-next-line: one-variable-per-declaration
            const name = 'Bob'
                , age = 48;

            const message3 = `The name is ${name} and the age is ${age}`;
            const message4 = 'The name is ' + name + ' and the age is ' + age;
            expect(message3).toBe(message4);
        });
    });
});


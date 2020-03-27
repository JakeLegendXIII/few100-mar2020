import { formatName } from './utils';

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
    it('some various misc. things about literals', () => {
        const n1 = 1;
        const n2 = 1.3;
        const n3 = 0xff; // base 16
        const n4 = 0b01010; // binary
        const n5 = 0o23; // octal.
        const big = 1_000_000;
    });
});

describe('array literals and tuple types', () => {
    it('two ways to declare an array', () => {
        const numbers: (number | string)[] = [1, 3, 4, 5];
        const val = numbers[2];
        numbers[0] = 'Tacos';
        let numbers2: Array<number | string>;
    });
    it('has array destructuring', () => {
        const friends = ['Sean', 'Amy', 'David', 'Sarah'];
        // const f1 = friends[0];
        // const f2 = friends[1];
        // const f3 = friends[3];
        const [f1, f2, , f3] = friends;
        expect(f1).toBe('Sean');
        expect(f2).toBe('Amy');
        expect(f3).toBe('Sarah');

        const [first, ...allTheOthers] = friends; // ... "the rest" (rest operator)
        expect(first).toBe('Sean');
        expect(allTheOthers).toEqual(['Amy', 'David', 'Sarah']);
    });
    it('using immutable techniques to change arrays', () => {
        const friends = ['Sean', 'Amy', 'David', 'Sarah'];
        const friends2 = ['Henry', ...friends]; // ... the spread operator

        expect(friends2).toEqual(['Henry', 'Sean', 'Amy', 'David', 'Sarah']);
    });
    describe('a "practical" example of a tuple', () => {
        it('how non-functional programmers would solve the problem', () => {
            // const result = formatName('Han', 'Solo');
            const { formattedName, numberOfLetters: letters } = formatName('Han', 'Solo');
            expect(formattedName).toBe('Solo, Han');
            expect(letters).toBe(9);

            const result = formatName('Luke', 'Skywalker');
            expect(result.formattedName).toBe('Skywalker, Luke');
            expect(result.numberOfLetters).toBe(15);

            const { formattedName: n } = formatName('Lando', 'Calrission');
            expect(n).toBe('Calrission, Lando');
        });
        it('the same thing with tuples', () => {
            function formatName2(first: string, last: string): [string, number] {
                const name = `${last}, ${first}`;
                return [name, name.length];
            }
            const [n, l] = formatName2('Han', 'Solo');
            expect(n).toBe('Solo, Han');
            expect(l).toBe(9);
        });
        it('tuple syntax example', () => {
            type Musician = [string, string, number, string];

            const nick: Musician = ['Nick', 'Cave', 63, 'Singer'];
            const warren: Musician = ['Warren', 'Ellis', 58, 'Violin'];

            expect(warren[2]).toBe(58);
        });
    });
});


import { add } from './utils';

describe('writing specs in typescript', () => {
    it('is easy', () => {
        expect(true).toBe(true);
    });
    it('can add', () => {
        expect(add(2, 2)).toBe(4);
    });
});
describe('writing a basic spec', () => {
    it('an example of this', () => {
        const myName = 'Joe';
        expect(myName).toBe('Joe');
        expect(myName.length).toBe(3);
    });
});


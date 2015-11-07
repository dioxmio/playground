import Person from './person.js';

const prefix = "student: ";
class Student extends Person {
    constructor() {
        super(... arguments);
        this.prefix = prefix;
    }
    fullName() {
        var parent = super.fullName();
        return this.prefix + parent;
    }
}

export default Student;

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    fullName() {
        return this.name + " " + this.surname;
    }
}

export default Person;
class Students {
    id;
    name;
    age;
    address;

    constructor(id, name, age, address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setAddress(address) {
        this.address = address;
    }

    getAddress() {
        return this.address;
    }

}
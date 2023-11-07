class Students {
    id;
    name;
    age;
    address;
    avatar;


    constructor(id, name, age, address, avatar) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        this.avatar = avatar;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setAvatar(avatar){
        this.avatar = avatar;
    }

    getAvatar(){
        return this.avatar;
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
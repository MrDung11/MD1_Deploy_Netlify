class User {
    id;
    name;
    username;
    email;
    password;
    avatar;

    constructor(id, name, username, email, password, avatar) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = "https://firebasestorage.googleapis.com/v0/b/dm1deploy.appspot.com/o/images%2FOIP.jpg?alt=media&token=da771e85-a784-4499-9e73-bbb5da96fde8&_gl=1*1kre81z*_ga*OTYxMjgwMjUxLjE2OTg3Njg5NjU.*_ga_CW55HF8NVT*MTY5ODc2ODk2NS4xLjEuMTY5ODc3MTg5Mi41Mi4wLjA.";
    }

    setAvatar(avatar){
        this.avatar = avatar
    }
    getAvatar (){
        return this.avatar;
    }

}
class User {
    #username;
    #password;

    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }

    getUsername() {
        return this.#username;
    }

    setUsername(username) {
        this.#username = username;
    }

    getPassword() {
        return "Access Denied";
    }

    setPassword(password) {
        if (password.length >= 6) {
            this.#password = password;
        } else {
            console.log("Password must be at least 6 characters long.");
        }
    }
}

const user = new User("john_doe", "securePass");
console.log(user.getUsername());
console.log(user.getPassword());
user.setPassword("123");
user.setPassword("newSecurePass");

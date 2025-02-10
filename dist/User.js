"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, password, name, role, email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.role = role;
        this.email = name;
    }
    register(username, password) {
        console.log("Register Succesfully!!");
        return true;
    }
    login(username, password) {
        if (this.username === username && this.password === password) {
            return true;
        }
        else {
            return false;
        }
    }
    logout() {
        console.log("Logout Succesfully!!");
        return true;
    }
    updateProfile(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        return `User[username = ${this.username}, password = ${this.password}, name = ${this.name}, role = ${this.role}, email = ${this.email}]`;
    }
}
exports.User = User;

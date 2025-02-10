"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
class Paticipant extends User_1.User {
    constructor(username, password, name, role, email) {
    }
    searchActivity() {
        return [];
    }
    registerForActivity(activitity) {
        this.registration = new Registration(1, this, activitity, "Waiting For Verify...");
        return true;
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inspector = void 0;
class Inspector {
    constructor(field) {
        this.field = field;
    }
    createActivity() {
        console.log("Activity created");
    }
    approveParticipant(participant) {
        console.log(`Participant approved`);
    }
    issueCertificate() {
        console.log("Certificate issued");
    }
    searchActivity() {
        return []; // Returns array of activities
    }
    // Getter and setter for field
    getField() {
        return this.field;
    }
    setField(field) {
        this.field = field;
    }
}
exports.Inspector = Inspector;

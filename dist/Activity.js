"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
class Activity {
    constructor(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status) {
        this.activityId = activityId;
        this.name = name;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
    }
    static searchActivity() {
        return Activity[];
    }
}
exports.Activity = Activity;

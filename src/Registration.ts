import { Activity } from "./Activity"
import { Participant } from "./Participant"

export class Registration {
    private registrationId: number
    private participant: Participant
    private activity: Activity
    private status: string

    constructor(registrationId: number, participant: Participant, activity: Activity, status: string) {
        this.registrationId = registrationId
        this.participant = participant
        this.activity = activity
        this.status = status
    }
    public submitRegistration() {

    }
    public updateStatus(status: string): void {
        this.status = status
    }
    public toString() {
        return `Registration[registrationId = ${this.registrationId}, participant = ${this.participant}, activity = ${this.activity}, status = ${this.status}]`
    }
}
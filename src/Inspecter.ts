import { Activity } from "./Activity"
import { Participant } from "./Participant"
import { Registration } from "./Registration"
import { User } from './User';
import { Certificate } from "./Certificate"

class Instructor extends User{

    constructor(username: string, password: string, name: string, role: string, email: string){
        super(username, password, name, role, email)
    }

    public createActivity(activityId: number, name: string,
    organizer: string,
    maxParticipant: number,
    activityPeriod: string,
    registrationPeriod: string,
    status: string,
    approvalRequired: boolean,
    certificateIssued: boolean,
    instructor: Instructor,
    schedule: string): void {
        let activity = Activity.createActivity(activityId,name,organizer,maxParticipant,activityPeriod,registrationPeriod,status,approvalRequired,certificateIssued,instructor,schedule)
    }

    public approveParticipant(activity: Activity, participant: Participant, registrations: Registration[]): void{
        activity.approveParticipant(participant,registrations)
    }

    public issueCertificate(activity: Activity, participant: Participant, registrations: Registration[],template:string): Certificate {
        return  activity.generateCertificate(registrations,this,this.username,template)
    }

    public searchActivity(): Activity[]{
        let activity = Activity.searchActivity()
        return activity 
    } 

}

export { Instructor }

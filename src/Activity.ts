import { Certificate } from "./Certificate"
import { Instructor } from "./Instructor"
import { Notification } from "./Notification"
import { Participant } from "./Participant"
import { Registration } from "./Registration"

class Activity {
    private activityId: number
    private name: string
    private organizer: string
    private maxParticipant: number
    private activityPeriod: string
    private registrationPeriod: string
    private status: string
    private approvalRequired: boolean
    private certificateIssued: boolean
    private instructor: Instructor
    private schedule: string

    constructor(activityId: number, name: string,
    organizer: string,
    maxParticipant: number,
    activityPeriod: string,
    registrationPeriod: string,
    status: string,
    approvalRequired: boolean,
    certificateIssued: boolean,
    instructor: Instructor,
    schedule: string) {
        this.activityId = activityId
        this.name = name
        this.organizer = organizer
        this.maxParticipant = maxParticipant
        this.activityPeriod = activityPeriod
        this.registrationPeriod = registrationPeriod
        this.status = status
        this.approvalRequired = approvalRequired
        this.certificateIssued = certificateIssued
        this.instructor = instructor
        this.schedule = schedule
    }

    public static searchActivity(): Activity[]{
        let activity = []
        activity.push(new Activity(1, 'drawing', 'NongTop', 150, 'วัน 31 ธันวาคม 10:00 - 22:00', 'วัน 28 ถึง 30', 'published', true, true, new Instructor('Alongkon','','','',''), 'sch'))
        return activity
    }

    public static createActivity(activityId: number, name: string,
    organizer: string,
    maxParticipant: number,
    activityPeriod: string,
    registrationPeriod: string,
    status: string,
    approvalRequired: boolean,
    certificateIssued: boolean,
    instructor: Instructor,
    schedule: string): Activity{
        return new Activity(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, certificateIssued, instructor, schedule)
    }

    public updateActivity(activityId: number, name: string,
    organizer: string,
    maxParticipant: number,
    activityPeriod: string,
    registrationPeriod: string,
    status: string,
    approvalRequired: boolean,
    certificateIssued: boolean,
    instructor: Instructor,
    schedule: string): void{
        this.activityId = activityId
        this.name = name
        this.organizer = organizer
        this.maxParticipant = maxParticipant
        this.activityPeriod = activityPeriod
        this.registrationPeriod = registrationPeriod
        this.status = status
        this.approvalRequired = approvalRequired
        this.certificateIssued = certificateIssued
        this.instructor = instructor
        this.schedule = schedule
    }

    public publishActivity(): void{
        this.status = 'published'
    }

    public approveParticipant(participant: Participant, registrations: Registration[]): void{
        for(let i = 0; i < registrations.length; i++){
            let par = registrations[i].getParticipant()
            if(participant.getEmail() === par.getEmail()){
                registrations[i].updateStatus('approved')
                let send = new Notification(1,
                    `คุณได้รับการอนุมัติเข้าร่วมกิจกรรมแล้วครับ`, participant, 'approved')
                console.log(send.toString())
            }
        }
    }


    public generateCertificate(registrations: Registration[], instructor: Instructor, signature: string, template: string): Certificate{
        let c1: Certificate = new Certificate(new Date().getTime(), 'Congratulation', instructor, signature, template)
        registrations.forEach(registration => {
            let participant = registration.getParticipant()
            c1 = Certificate.generateCertificate(new Date().getTime(), `Congratulation ${participant.getEmail()}`, instructor, signature, template)
        });
        return c1
    }

    
}

export { Activity }

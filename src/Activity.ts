export class Activity {
    private activityId:number
    private name : string
    private organizer : string
    private maxParticipant : string
    private activityPeriod :string
    private registrationPeriod : string
    private status : string
    constructor(activityId: number, name: string, organizer: string,maxParticipant: number, activityPeriod: string,registrationPeriod: string, status: string) 
    {
        this.activityId = activityId
        this.name = name
        this.organizer = organizer
        this.maxParticipant = maxParticipant
        this.activityPeriod = activityPeriod
        this.registrationPeriod = registrationPeriod
        this.status = status
    }
    public static searchActivity(): Activity[]{
    return Activity[]
    }
}
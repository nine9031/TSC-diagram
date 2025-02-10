import { Participant } from './Participant';
import { User } from "./User";
import {  }

class Participant extends User{

    constructor(username: string, password: string, name: string, role: string, email: string){

    }

    public searchActivity(): Activitity[]{
        return []
    }

    public registerForActivity(activitity:Activitity): boolean {
        this.registration = new Registration(1, this, activitity, "Waiting For Verify...")
        return true
    }
    public downloadCertificate(activity: Activity): Certificate {

    }

    public toString(): string {
        return `Participant(super)`
    }
}
import { Certificate } from "./Certificate";

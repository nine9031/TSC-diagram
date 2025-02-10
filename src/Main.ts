import { User } from "./User"
import { Participant } from "./Participant"
//import { Activity } from "./Activity"
import { Registration } from "./Registration"
import { Certificate } from "./Certificate"
import { Instructor } from "./Instructor"
console.log("################# User ##################")
const user1 = new User("Siwakorn", "123", "First", "student", "664259028@webmail.npru.ac.th")
console.log(user1.toString())
console.log("#############################################")
console.log("################# Participant ##################")
const participant1 = new Participant("Siwakorn", "123", "First", "student", "664259028@webmail.npru.ac.th")
console.log("#############################################")
console.log("################# Registration ##################")
//const registration1 = new Registration("1", participant1, activity1, "student")
console.log("#############################################")
console.log("################# User ##################")
const certificate1 = new Certificate(1, "กิจกรรม", new Instructor(), "Siwakorn", "")
console.log(user1.toString())
console.log("#############################################")
import { User } from "./User";
import { Participant } from "./Participant";
import { Registration } from "./Registration";
import { Instructor } from "./Instructor";
import { Certificate } from "./Certificate";
import { Notification } from "./Notification";
import { Activity } from "./Activity";
let tae013=new User("Ratchanon","deekub","tae","student","664259013@webmail.npru.ac.th")
console.log(tae013.toString())

let pa1 = new Participant("Phongsakorn", "112", 'Boom', "student", "664259011@webmail.npru.ac.th")

let pa2 = new Participant("Alongkon", "1234", "Nine", "student", "664259031@webmail.npru.ac.th")

console.log(pa1.toString())
console.log(pa2.toString())
// == instructor ==
const ins = new Instructor('teacher boom', '123', 'Boom', 'teacher', 't@gmail.com')

// === activity ===
console.log('=== activity ===')
const ac1 = new Activity(1, 'drawing', 'NongTop', 150, 'วัน 31 ธันวาคม 10:00 - 22:00', 'วัน 28 ถึง 30', 'published', true, true, ins, 'sch')

const ac2 = new Activity(2, 'scubar', 'NongBoom', 3000, 'วัน 31 ธันวาคม 10:00 - 22:00', 'วัน 28 ถึง 30', 'published', true, true, ins, 'sch')


console.log('=== activity ===')

console.log('=== registration ===')
const registrations = []

let reg = new Registration(1, pa1, ac1, 'รออุมัติ')
registrations.push(reg)
console.log(reg.toString())
let reg2 = new Registration(2, pa2, ac2, 'รออนุมัติ')
registrations.push(reg2)
console.log(reg2.toString())
// ac1.approveParticipant(pa1, registrations)

ins.approveParticipant(ac2,pa2, registrations)
console.log(reg2.toString())

console.log(ac1.generateCertificate(registrations, ins, 'signature', 'drawing'))
console.log('=== registration ===')
console.log(ins.issueCertificate(ac2,pa2,registrations,'01'))
console.log('=== instructor ===')
// let Api = new Certificate(1,"กิจกรรม",new Instructor(),"ลายเซ็น","")

// console.log(Api.toString())

// let eiei = new Notification(1,"ผมทำได้แล้วครับ เย้", pa1 , "รออนุมัติ")

// console.log(eiei.toString())

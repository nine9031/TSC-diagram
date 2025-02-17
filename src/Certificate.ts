import { Instructor } from "./Instructor"
class Certificate{
    private certificateId:number
    private content:string
    private issuer:Instructor
    private signature:string
    private template:string
    constructor(certificateId:number,content:string, issuer:Instructor,signature:string,template:string){
        this.certificateId=certificateId
        this.content=content
        this.issuer=issuer
        this.signature=signature
        this.template=template

    }
    public static generateCertificate(certificateId:number,content:string, issuer:Instructor,signature:string,template:string):Certificate{
        return new Certificate(certificateId,content,issuer,signature,template)
    }
    public sendCertificateNotification():void{
        // let pa = new Notification(1,"พร้อมให้ดาวน์โหลดแล้ว",new , 'df')
    }
    public toString():string{
        return `Certificate[certificateId=${this.certificateId}, content=${this. content},issuer=${this.issuer},signature=${this.signature},template=${this.template}]`
    }
}
export { Certificate }

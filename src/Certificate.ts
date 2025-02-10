export class Certificate {
    private certificateId: number
    private content: string
    private issuer: Inspecter
    private signature: File
    private template: File

    constructor(certificateId: number, content: string, issuer: Inspecter, signature: File, template: File){ 
        this.certificateId = certificateId
        this.content = content
        this.issuer = issuer
        this.signature = signature
        this.template = template
    }

    public genetateCertificate():Certificate {
        return new Certificate(this.certificateId, this.content, this.issuer, this.signature, this.template)
    }
    public sendCertificateNotification(): void {
        
    }
}
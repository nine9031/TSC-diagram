"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
class Certificate {
    constructor(certificateId, content, issuer, signature, template) {
        this.certificateId = certificateId;
        this.content = content;
        this.issuer = issuer;
        this.signature = signature;
        this.template = template;
    }
    genetateCertificate() {
        return new Certificate(this.certificateId, this.content, this.issuer, this.signature, this.template);
    }
    sendCertificateNotification() {
    }
}
exports.Certificate = Certificate;

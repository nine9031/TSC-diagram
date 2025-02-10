export class Inspector {
    private field: string;

    constructor(field: string) {
        this.field = field;
    }

    public createActivity(): void {
        console.log("Activity created");
    }

    public approveParticipant(participant: any): void {
        console.log(`Participant approved`);
    }

    public issueCertificate(): void {
        console.log("Certificate issued");
    }

    public searchActivity(): any[] {
        return []; // Returns array of activities
    }

    // Getter and setter for field
    public getField(): string {
        return this.field;
    }

    public setField(field: string): void {
        this.field = field;
    }
}
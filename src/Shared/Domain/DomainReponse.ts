export class DomainResponse {
    public success: boolean;
    public data: any;

    constructor(success: boolean, data: any) {
        this.success = success;
        this.data = data;
    }
}
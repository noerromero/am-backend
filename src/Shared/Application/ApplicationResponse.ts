export class ApplicationResponse {
    public success: boolean;
    public message: string;
    public data: any;

    constructor(success: boolean, message: string, data: any) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}
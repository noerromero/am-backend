export class ComponentReview {
    id: string;
    status: string;
    errorType: string;
    diagnostic: string;
    recommendation: string;

    constructor(id: string, status: string, errorType: string, diagnostic: string, recommendation: string) {
        this.id = id;
        this.status = status;
        this.errorType = errorType;
        this.diagnostic = diagnostic;
        this.recommendation = recommendation;
    }
}
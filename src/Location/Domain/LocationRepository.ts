export interface LocationRepository {
    create(reportItem: Location): Promise<void>;
    //update(reportItem: ReportItem): Promise<void>;
    //delete(id: string): Promise<void>;
    //findById(id: string): Promise<ReportItem>;
    findAll(): Promise<Location[]>;
}
import { Component } from "./Component";

export interface ComponentRepository {
    create(reportItem: Component): Promise<void>;
    //update(reportItem: ReportItem): Promise<void>;
    //delete(id: string): Promise<void>;
    //findById(id: string): Promise<ReportItem>;
    findAll(): Promise<Component[]>;
}
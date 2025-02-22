import { ComponentRepository } from "../../../Domain/ComponentRepository";
import { Component } from "../../../Domain/Component";
import { connect } from "../../../../../Shared/Infrastructure/Persistence/Mysql/Connection";

export class MysqlComponentRepository implements ComponentRepository {

    public async create(reportItem: Component): Promise<void> {
        const conn = await connect();
        const query = `
            INSERT INTO component (id, tag, \`system\`, machine, tag2, machineImagePath)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            reportItem.id,
            reportItem.tag,
            reportItem.system,
            reportItem.machine,
            reportItem.tag2,
            reportItem.machineImagePath,
        ];
        try {
            await conn.execute(query, values);
        } catch (error) {
            await conn.end();
            throw error;
        }
    }

    public async findAll(): Promise<Component[]> {
        const conn = await connect();
        const query = `SELECT id, tag, \`system\`, machine, tag2, machineImagePath FROM component`;
        
        try {
            const [rows] = await conn.execute(query);
            await conn.end();
            
            const components: Component[] = (rows as any[]).map(row => {
                return new Component(
                    row.id,
                    row.tag,
                    row.system,
                    row.machine,
                    row.tag2,
                    row.machineImagePath
                );
            });

            return components;
        } catch (error) {
            await conn.end();
            throw error;
        }
    }

}
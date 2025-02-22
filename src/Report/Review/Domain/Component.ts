import { DomainResponse } from '../../../Shared/Domain/DomainReponse';
import { ComponentRepository } from './ComponentRepository';

export class Component {
    id: string;
    tag: string;
    system: string;
    machine: string;
    tag2: string;
    machineImagePath: string;
    repository: ComponentRepository | null;

    constructor(id: string = '', tag: string = '', system: string = '', machine: string = '', tag2: string = '', machineImagePath: string = '') {
        this.id = id;
        this.tag = tag;
        this.system = system;
        this.machine = machine;
        this.tag2 = tag2;
        this.machineImagePath = machineImagePath;
        this.repository = null;
    }

    public setRepository(repository: ComponentRepository): void {
        this.repository = repository;
    }

    public async create(): Promise<DomainResponse> {
        const errors = this.validate();
        if (errors.length > 0) {
            return new DomainResponse(false, errors);
        }
        await this.repository!.create(this);
        return new DomainResponse(false, []);
    }

    public async findAll(): Promise<DomainResponse> {
        const $results = await this.repository!.findAll();
        return new DomainResponse(true, $results);
    }

    protected validate(): Array<string> {
        let errors: Array<string> = [];
        if (this.tag === '') {
            errors.push('Tag es requerido');
        }
        if (this.system === '') {
            errors.push('Sistema es requerido');
        }
        if (this.machine === '') {
            errors.push('Equipo es requerido');
        }
        if (this.tag2 === '') {
            errors.push('Tag2 es requerido');
        }
        if (this.repository === null) {
            throw new Error('Repository es requerido');
        }
        return [];
    }
}
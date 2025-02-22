import { DomainResponse } from '../../Shared/Domain/DomainReponse';
import { LocationRepository } from './LocationRepository';

export class Location {
    id: string;
    parent_id: string | null;
    code: string;
    name: string;
    description: string | null;
    create_at: number | null;
    last_update: number | null;
    last_user: string | null;
    repository: LocationRepository | null;

    constructor(
        id: string = '',
        parent_id: string | null = null,
        code: string = '',
        name: string = '',
        description: string | null = null,
        create_at: number | null = null,
        last_update: number | null = null,
        last_user: string | null = null
    ) {
        this.id = id;
        this.parent_id = parent_id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.create_at = create_at;
        this.last_update = last_update;
        this.last_user = last_user;
        this.repository = null;
    }

    public setRepository(repository: LocationRepository): void {
        this.repository = repository;
    }

    public async create(): Promise<DomainResponse> {
        const errors = this.validate();
        if (errors.length > 0) {
            return new DomainResponse(false, errors);
        }
        //await this.repository!.create(this);
        return new DomainResponse(true, []);
    }

    public async findAll(): Promise<DomainResponse> {
        const results = await this.repository!.findAll();
        return new DomainResponse(true, results);
    }

    protected validate(): Array<string> {
        let errors: Array<string> = [];
        if (this.id === '') {
            errors.push('ID es requerido');
        }
        if (this.code === '') {
            errors.push('Código es requerido');
        }
        return errors;
    }
}
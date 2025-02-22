import { ApplicationResponse } from '../../../../Shared/Application/ApplicationResponse';
import { DomainResponse } from '../../../../Shared/Domain/DomainReponse';
import { Component } from '../../Domain/Component';
import { ComponentRepository } from '../../Domain/ComponentRepository';

export class ComponentCreator {
    private repository: ComponentRepository;

    constructor(repository: ComponentRepository) {
        this.repository = repository;
    }

    public async run(
        id: string,
        tag: string,
        system: string,
        machine: string,
        tag2: string,
        machineImagePath: string
    ): Promise<ApplicationResponse> {
        const component = new Component(
            id,
            tag,
            system,
            machine,
            tag2,
            machineImagePath
        );
        component.setRepository(this.repository);
        const response = await component.create();
        return this.handleResponse(response);
    }

    public handleResponse(response: DomainResponse): ApplicationResponse {
        return new ApplicationResponse(
            response.success,
            'Componente creado correctamente',
            response.data
        );
    }
}

import { ApplicationResponse } from "../../../../Shared/Application/ApplicationResponse";
import { DomainResponse } from "../../../../Shared/Domain/DomainReponse";
import { Component } from "../../Domain/Component";
import { ComponentRepository } from "../../Domain/ComponentRepository";

export class AllComponmentFetcher {
    private repository: ComponentRepository;
    
    constructor(repository: ComponentRepository) {
        this.repository = repository;
    }

    public async run(): Promise<ApplicationResponse> {
            const component = new Component();
            component.setRepository(this.repository);
            const response = await component.findAll();
            return this.handleResponse(response);
        }
    
        public handleResponse(response: DomainResponse): ApplicationResponse {
            return new ApplicationResponse(
                response.success,
                'Búsqueda exitosa',
                response.data
            );
        }
}
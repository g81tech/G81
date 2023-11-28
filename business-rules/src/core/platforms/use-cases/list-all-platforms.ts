import { UseCaseRequest } from "../../shared/UseCase";
import Platform from "../model/Plataform";
import { PlatformRepository } from "../repository/Platform";

export class ListAllPlatforms implements UseCaseRequest<void, Platform[]> {
    constructor(private readonly platformRepository: PlatformRepository) {}
    async execute(): Promise<Platform[]> {
        return await this.platformRepository.getAll();
    }
}

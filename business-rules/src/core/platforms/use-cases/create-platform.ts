import { UseCaseRequest } from "../../shared/UseCase";
import Platform from "../model/Plataform";
import { PlatformRepository } from "../repository/Platform";

export class CreatePlaftorm implements UseCaseRequest<Platform, void> {
    constructor(private readonly platformRepository: PlatformRepository) {}
    async execute(platform: Platform): Promise<void> {
        await this.platformRepository.create(platform);
    }
}

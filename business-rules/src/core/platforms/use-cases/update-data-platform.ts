import { UseCaseRequest } from "../../shared/UseCase";
import Platform from "../model/Plataform";
import { PlatformRepository } from "../repository/Platform";

export class UpdatePlatform implements UseCaseRequest<Platform, Platform> {
    constructor(private readonly platformRepository: PlatformRepository) {}
    async execute(platform: Platform): Promise<Platform> {
        const _platform = await this.platformRepository.update(platform);
        return _platform;
    }
}

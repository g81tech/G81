import { UseCaseRequest } from "../../shared/UseCase";
import Platform from "../model/Plataform";
import { PlatformRepository } from "../repository/Platform";

export class FindPlatform implements UseCaseRequest<string, Platform> {
    constructor(private readonly platformRepository: PlatformRepository) {}

    async execute(id: string): Promise<Platform> {
        const platform = await this.platformRepository.getById(id);
        if (!platform) throw new Error("Platform not found.");
        return platform;
    }
}

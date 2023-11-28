import Platform from "../model/Plataform";

export interface PlatformRepository {
    create(platform: Platform): Promise<void>;
    update(platform: Platform): Promise<Platform>;
    delete(id: string): Promise<void>;
    getById(id: string): Promise<Platform>;
    getAll(): Promise<Platform[]>;
}

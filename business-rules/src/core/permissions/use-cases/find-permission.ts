import { UseCaseRequest } from "../../shared/UseCase";
import Permission from "../model/Permission";
import { PermissionRepository } from "../repository/Permission";

export class FindPermission implements UseCaseRequest<string, Permission> {
    constructor(private readonly permissionRepository: PermissionRepository) {}
    async execute(id: string): Promise<Permission> {
        const permission = await this.permissionRepository.getById(id);
        if (!permission) throw new Error("Permission not found.");
        return permission;
    }
}

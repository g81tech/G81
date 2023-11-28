import { UseCaseRequest } from "../../shared/UseCase";
import Permission from "../model/Permission";
import { PermissionRepository } from "../repository/Permission";

export class CreatePermission implements UseCaseRequest<Permission, void> {
    constructor(private readonly permissionRepository: PermissionRepository) {}
    async execute(permission: Permission): Promise<void> {
        await this.permissionRepository.create(permission);
    }
}

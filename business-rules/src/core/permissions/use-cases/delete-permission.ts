import { UseCaseRequest } from "../../shared/UseCase";
import Permission from "../model/Permission";
import { PermissionRepository } from "../repository/Permission";

export class DeletePermission implements UseCaseRequest<Permission, void> {
    constructor(private readonly permissionRepository: PermissionRepository) {}
    async execute(permission: Permission): Promise<void> {
        await this.permissionRepository.delete(permission.id.value);
    }
}

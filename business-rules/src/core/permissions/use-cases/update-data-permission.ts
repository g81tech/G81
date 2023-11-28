import { UseCaseRequest } from "../../shared/UseCase";
import Permission from "../model/Permission";
import { PermissionRepository } from "../repository/Permission";

export class UpdatePermission
    implements UseCaseRequest<Permission, Permission>
{
    constructor(private readonly permissionRepository: PermissionRepository) {}
    async execute(permission: Permission): Promise<Permission> {
        return await this.permissionRepository.update(permission);
    }
}

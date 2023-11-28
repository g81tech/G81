import { UseCaseRequest } from "../../shared/UseCase";
import Permission from "../model/Permission";
import { PermissionRepository } from "../repository/Permission";

export class ListAllPermissions implements UseCaseRequest<void, Permission[]> {
    constructor(private readonly permissionRepository: PermissionRepository) {}
    async execute(): Promise<Permission[]> {
        return await this.permissionRepository.getAll();
    }
}

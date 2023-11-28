import Permission from "../model/Permission";

export interface PermissionRepository {
    create(permission: Permission): Promise<void>;
    update(permission: Permission): Promise<Permission>;
    delete(id: string): Promise<void>;
    getById(id: string): Promise<Permission>;
    getAll(): Promise<Permission[]>;
}

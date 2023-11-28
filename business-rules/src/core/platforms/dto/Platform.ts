import { PermissionProps } from "../../permissions/dto/Permission";

export interface PlatformProps {
    id?: string;
    name?: string;
    permissions: PermissionProps[];
}

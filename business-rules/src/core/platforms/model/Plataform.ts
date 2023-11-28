import Permission from "../../permissions/model/Permission";
import Entity from "../../shared/Entity";
import Id from "../../shared/Id";
import DefaultName from "../../shared/Name";
import { PlatformProps } from "../dto/Platform";

export default class Platform extends Entity {
    readonly name: string;
    readonly permissions: Permission[];

    constructor(props: PlatformProps) {
        //Manda o ID para a superclasse Entity e se ele não existir, manda um ID vazio e ela cria.
        super(props.id!);
        this.name = props.name!;

        if (!props.permissions || props.permissions.length === 0) {
            throw new Error("Platform must have at least one permission.");
        }

        this.permissions = props.permissions.map(
            (permission) => new Permission(permission)
        );
    }
}

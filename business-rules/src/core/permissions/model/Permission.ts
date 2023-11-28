import Entity from "../../shared/Entity";
import DefaultName from "../../shared/Name";
import { PermissionProps } from "../dto/Permission";

export default class Permission extends Entity {
    readonly name: string;
    constructor(props: PermissionProps) {
        //Manda o ID para a superclasse Entity e se ele não existir, manda um ID vazio e ela cria.
        super(props.id!);
        this.name = props.name!;
    }
}

import Platform from "../../platforms/model/Plataform";
import Entity from "../../shared/Entity";
import DefaultName from "../../shared/Name";
import { UserProps } from "../dto/User";

export default class User extends Entity {
    readonly name: DefaultName;
    readonly platforms: Platform[];

    constructor(props: UserProps) {
        //Manda o ID para a superclasse Entity e se ele não existir, manda um ID vazio e ela cria.
        super(props.id!);
        this.name = new DefaultName(props.name!);
        this.platforms = props.platforms!.map(
            (platform) => new Platform(platform)
        );
    }
}

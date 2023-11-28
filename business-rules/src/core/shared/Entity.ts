import Id from "./Id";

export default abstract class Entity {
    readonly id: Id;

    constructor(id: string) {
        //Se esse valor ID existir vai instanciar o ID se não lá no Id vai gerar um valor novo.
        this.id = new Id(id);
    }

    //Quando uma entidade é igual a outra, significa que ela é a mesma entidade.
    equality(entity: Entity): boolean {
        return this.id.value === entity.id.value;
    }

    //Quando uma entidade é diferente de outra, significa que ela não é a mesma entidade.
    difference(entity: Entity): boolean {
        return !this.equality(entity);
    }
}

export default class DefaultName {
    constructor(
        readonly fullName: string,
        readonly min: number = 3,
        readonly max: number = 100
    ) {
        if (min > max) {
            throw new Error("Min value cannot be greater than max value.");
        }
        if (!fullName) {
            throw new Error("Name cannot be empty.");
        }
        if (fullName.length < min) {
            throw new Error(`Name must be at least ${min} characters.`);
        }
        if (fullName.length > max) {
            throw new Error(`Name must be less than ${max} characters.`);
        }
        //Não deve conter caracetres especiais mais pode acentos
        if (!fullName.match(/^[a-zA-ZÀ-ÿ\u00C0\u00FF ]+$/)) {
            throw new Error("Name must not contain special characters.");
        }
    }
    first(): string {
        return this.fullName.split(" ")[0];
    }
    last(): string {
        return this.fullName.split(" ")[1];
    }
}

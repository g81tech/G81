import { v4 as uuidv4, validate } from "uuid";

export default class Id {
    constructor(readonly value: string = uuidv4()) {
        if (!validate(value)) throw new Error("Invalid Id.");
    }
}

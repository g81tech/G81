import User from "../model/User";
import { UserRepository } from "../repository/User";

export class ListUsers {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(): Promise<User[]> {
        return await this.userRepository.getAll();
    }
}

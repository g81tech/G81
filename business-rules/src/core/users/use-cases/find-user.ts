import { UseCaseRequest } from "../../shared/UseCase";
import User from "../model/User";
import { UserRepository } from "../repository/User";

export class FindUser implements UseCaseRequest<string, User> {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(id: string): Promise<User> {
        const user = await this.userRepository.getById(id);
        if (!user) throw new Error("User not found.");
        return user;
    }
}

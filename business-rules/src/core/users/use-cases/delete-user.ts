import { UseCaseRequest } from "../../shared/UseCase";
import User from "../model/User";
import { UserRepository } from "../repository/User";

export class DeleteUser implements UseCaseRequest<User, void> {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(user: User): Promise<void> {
        await this.userRepository.delete(user.id.value);
    }
}

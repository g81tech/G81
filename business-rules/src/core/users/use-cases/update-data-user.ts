import { UseCaseRequest } from "../../shared/UseCase";
import User from "../model/User";
import { UserRepository } from "../repository/User";

export class UpdateUser implements UseCaseRequest<User, User> {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(user: User): Promise<User> {
        const _user = await this.userRepository.update(user);
        return _user;
    }
}

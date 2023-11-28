import { UseCaseRequest } from "../../shared/UseCase";
import User from "../model/User";
import { UserRepository } from "../repository/User";

export default class CreateUser implements UseCaseRequest<User, void> {
    constructor(private userRepository: UserRepository) {}
    async execute(user: User): Promise<void> {
        this.userRepository.create(user);
    }
}

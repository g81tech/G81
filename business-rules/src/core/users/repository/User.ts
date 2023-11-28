import User from "../model/User";

export interface UserRepository {
    create(user: User): Promise<void>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<void>;
    getById(id: string): Promise<User>;
    getAll(): Promise<User[]>;
}

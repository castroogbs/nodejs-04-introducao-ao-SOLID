import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const isEmailAlreadyTaken = this.usersRepository.findByEmail(email);
    if (isEmailAlreadyTaken) {
      throw new Error("O e-mail selecionado já está em uso");
    }

    const user = this.usersRepository.create({ email, name });
    return user;
  }
}

export { CreateUserUseCase };

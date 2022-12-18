import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("O usuário informado não existe");
    }

    if (!user.admin) {
      throw new Error(
        "Apenas administradores podem verificar os usuários cadastrados"
      );
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

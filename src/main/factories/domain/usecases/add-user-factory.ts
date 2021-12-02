import { setupAddUser, AddUserService } from '@/domain/usecases/add-user'
import { makeUserRepository } from '@/main/factories/infrastructure/repositories'

export const makeAddUser = (): AddUserService => {
  // conexao com banco
  return setupAddUser(makeUserRepository())
}

import { Controller, AddUserController } from '@/interfaces/controllers'
import { makeAddUser } from '@/main/factories/domain/usecases'

export const makeAddUserController = (): Controller => new AddUserController(makeAddUser())
